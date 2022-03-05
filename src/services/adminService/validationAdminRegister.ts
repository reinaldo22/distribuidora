import AppError from "@shared/error/AppError";
import { AdminRepositorie } from "src/repositories/adminRepositorie";
import { getCustomRepository } from "typeorm";

interface IAdmin {
    email: string;
    code: string;
}

class ValidationRegisterService {

    public async validationRegister({ email, code }: IAdmin) {
        const adminRepositorie = getCustomRepository(AdminRepositorie);
        const admin = await adminRepositorie.findByCodeEmail(code, email);


        if (!admin) {
            throw new AppError("User not found", 404);
        }

        if (admin?.validated === true) {
            throw new AppError("User already validated", 404);
        }
        admin.validated = true;
        await adminRepositorie.update(admin.id, admin);
    }

}
export default ValidationRegisterService;