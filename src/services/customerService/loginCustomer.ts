import AppError from "@shared/error/AppError";
import { CustomerRepositorie } from "src/repositories/customerReposiorie";
import { getCustomRepository } from "typeorm";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


interface ILogin {
    email: string;
    password: string;
}


class LoginCustomerService {

    public async signIn({ email, password }: ILogin) {

        const customerRepositorie = getCustomRepository(CustomerRepositorie);

        const customer = await customerRepositorie.findByEmail(email);
        if (!customer) {
            throw new AppError("E-mail não existe ou incorreto");
        }
        if (customer.validated === false) {
            throw new AppError("Usuário não validado");
        }

        const isValidatePassword = await bcrypt.compare(password, customer.password);

        if (!isValidatePassword) {
            throw new AppError("Senha inválida ou e-mail incorreto");
        }


        const token = jwt.sign({ id: customer.id }, "khk3jjkk2vk4j2vkv", { expiresIn: '1d' });
        customer.password = "";
        return ({
            customer,
            message: "Ok",
            token
        });


    }
}

export default LoginCustomerService;