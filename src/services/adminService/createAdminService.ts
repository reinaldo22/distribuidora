import AppError from "@shared/error/AppError";
import { AdminRepositorie } from "src/repositories/adminRepositorie";
import Util from "src/util/Util";
import { getCustomRepository } from "typeorm";
import bcrypt from 'bcryptjs';

interface IAdmin {
    id?: string;
    email: string;
    password: string;
    name: string;
    code?: string;
}

class CreateAdminService {
    
    public async createAdminService({ name, email, password, code }: IAdmin) {

        const utilitario = new Util();
        let generatedCode = await utilitario.generateCode()

        const adminRepositorie = getCustomRepository(AdminRepositorie);


        const adminExists = await adminRepositorie.findByName(name);
        if (adminExists) {
            throw new AppError("This name already exists", 404);
        }

        const emailExists = await adminRepositorie.findByEmail(email);
        if (emailExists) {
            throw new AppError("This email already exists", 404);
        }
        const salt = await bcrypt.genSalt(1);
        const passwordHashed = await bcrypt.hash(password, salt);

        const admin = adminRepositorie.create({
            name,
            email,
            password: passwordHashed,
            validated: false,
            code: generatedCode,
        });

        // const transport = await utilitario.sendEmailRegister(email, generatedCode);
        // console.log("+++++++++++++++++envio", transport)
       
        await adminRepositorie.save(admin);
    }
}
export default CreateAdminService;