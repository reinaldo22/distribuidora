import { Request, Response } from "express";
import ForgotAdminPassword from "src/services/adminService/forgotAdminPassword";

class ForgotAdminPasswordController {

    public async forgotPassController(req: Request, res: Response) {

        const { email } = req.body

        const forgotService = new ForgotAdminPassword();

        
        const adminForgot = await forgotService.forgotPassword({
            email
        });
        
        return res.status(200).json({ message: "We have sent your new password to the registered email!" })
    }

}

export default new ForgotAdminPasswordController();
