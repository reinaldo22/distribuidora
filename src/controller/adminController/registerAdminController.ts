import { Request, Response } from 'express';
import ValidationRegisterService from 'src/services/adminService/validationAdminRegister';

class RegisterAdminController {

    public async validationCode(req: Request, res: Response) {

        const { email, code } = req.body;
        const validationAdminService = new ValidationRegisterService();

        const admin = await validationAdminService.validationRegister({
            code,
            email
        })
        return res.status(201).json({ message: "Admin validated succesfuly" });
    }
}
export default new RegisterAdminController();