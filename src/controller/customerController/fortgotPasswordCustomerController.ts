import { Request, Response } from "express";
import ForgotCustomerPassword from "src/services/customerService/forgotCustomerPassword";


class ForgotCustomerPasswordController {

    public async forgotPassController(req: Request, res: Response) {

        const { email } = req.body

        const forgotService = new ForgotCustomerPassword();

        
        const customerForgot = await forgotService.forgotPassword({
            email
        });
        
        return res.status(200).json({ message: "We have sent your new password to the registered email!" })
    }

}

export default new ForgotCustomerPasswordController();
