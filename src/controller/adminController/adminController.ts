import { Request, Response } from 'express';
import ValidationRegisterService from 'src/services/adminService/validationRegister';
import AdminService from '../../services/adminService/adminService';

class AdminController {
    public async createAdminController(req: Request, res: Response) {

        const { name, email, password } = req.body;

        const adminService = new AdminService();

        const admin = await adminService.createAdminService({
            name,
            email,
            password
        })
        return res.status(201).json({ message: "Admin created succesfuly" });
    }
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
export default new AdminController();