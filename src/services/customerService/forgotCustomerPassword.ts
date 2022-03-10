import AppError from "@shared/error/AppError";
import Util from "src/util/Util";
import { getCustomRepository } from "typeorm";
import bcrypt from 'bcryptjs';
import { CustomerRepositorie } from "src/repositories/customerReposiorie";

interface ICustomer {
    email: string;
}


class ForgotCustomerPassword {

    public async forgotPassword({ email }: ICustomer) {
        const customerRepositorie = getCustomRepository(CustomerRepositorie);
        const emailExists = await customerRepositorie.findByEmail(email);
        if (!emailExists) {
            throw new AppError("This email not found", 404);
        }
        const utilitario = new Util();
        let generatedCode = await utilitario.generateCode();

        const salt = await bcrypt.genSalt(1);
        const passwordHashed = await bcrypt.hash(generatedCode, salt);

        emailExists.password = passwordHashed;

        console.log(">>>>>>>>>>>>>>>", emailExists)

        await customerRepositorie.save(emailExists);

        await utilitario.sendEmailForgotPass(email, generatedCode);

        return emailExists;

    }
}

export default ForgotCustomerPassword;