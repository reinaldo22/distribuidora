import AppError from "@shared/error/AppError";
import Util from "src/util/Util";
import { getCustomRepository } from "typeorm";
import { AdminRepositorie } from '../../repositories/adminRepositorie';
import bcrypt from 'bcryptjs';

interface IAdmin {
    email: string;
}


class ForgotAdminPassword {

    public async forgotPassword({ email }: IAdmin) {
        const adminRepositorie = getCustomRepository(AdminRepositorie);
        const emailExists = await adminRepositorie.findByEmail(email);
        if (!emailExists) {
            throw new AppError("This email not found", 404);
        }
        const utilitario = new Util();
        let generatedCode = await utilitario.generateCode();

        const salt = await bcrypt.genSalt(1);
        const passwordHashed = await bcrypt.hash(generatedCode, salt);

        emailExists.password = passwordHashed;

        console.log(">>>>>>>>>>>>>>>", emailExists)

        await adminRepositorie.save(emailExists);

        await utilitario.sendEmailForgotPass(email, generatedCode);

        return emailExists;

    }
}

export default ForgotAdminPassword;