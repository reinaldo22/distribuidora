import { Request, Response } from 'express';
import LoginAdminService from 'src/services/adminService/loginCustomer';

class LoginAdminController {

    public async login(req: Request, res: Response) {

        const { email, password } = req.body;


        const loginAdmin = new LoginAdminService();

        const admin = await loginAdmin.signIn({
            email,
            password
        });


        return res.status(200).json({ admin });

    }
}

export default new LoginAdminController();