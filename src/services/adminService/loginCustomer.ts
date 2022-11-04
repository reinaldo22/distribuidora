import AppError from "@shared/error/AppError";
import { CustomerRepositorie } from "src/repositories/customerReposiorie";
import { getCustomRepository } from "typeorm";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AdminRepositorie } from "src/repositories/adminRepositorie";


interface ILogin {
    email: string;
    password: string;
}


class LoginAdminService {

    public async signIn({ email, password }: ILogin) {

        const adminRepositorie = getCustomRepository(AdminRepositorie);

        const admin = await adminRepositorie.findByEmail(email);
        if (!admin) {
            throw new AppError("E-mail não existe ou incorreto");
        }
        if (admin.validated === false) {
            throw new AppError("Usuário não validado");
        }

        const isValidatePassword = await bcrypt.compare(password, admin.password);

        if (!isValidatePassword) {
            throw new AppError("Senha inválida ou e-mail incorreto");
        }


        const token = jwt.sign({ id: admin.id }, "khk3jjkk2vk4j2vkv", { expiresIn: '1d' });
        admin.password = "";
        return ({
            status: true,
            message: "Ok",
            token,
            data: admin
        });


    }
}

export default LoginAdminService;