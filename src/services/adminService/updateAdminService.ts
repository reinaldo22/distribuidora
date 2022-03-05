import AppError from "@shared/error/AppError";
import { AdminRepositorie } from "src/repositories/adminRepositorie";
import { getCustomRepository, Not } from "typeorm";
import bcrypt from 'bcryptjs';
import Util from "src/util/Util";

interface IAdmin {
    id?: string;
    email: string;
    password: string;
    name: string;
    code?: string;
}

class UpdateAdminService {

    public async updateAdmin({ id, name, email, password, code }: IAdmin) {

        const adminRepository = getCustomRepository(AdminRepositorie);
        const admin = await adminRepository.findOne(id);

        if (!admin) {
            throw new AppError("Admin not fount!", 404);
        }
        const emailExists = await adminRepository.find({
            where: [
                {
                    email: email,
                    id: Not(id)
                }
            ]
        })

        if (emailExists.length > 0) {
            throw new AppError("This email already exists", 404);
        }
        const salt = await bcrypt.genSalt(1);
        const passwordHashed = await bcrypt.hash(password, salt)

        admin.name = name;
        admin.email = email;
        admin.password = passwordHashed;

        await adminRepository.update(admin.id, admin);

        return admin;
    }

}
export default UpdateAdminService;