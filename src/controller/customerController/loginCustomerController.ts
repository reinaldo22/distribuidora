import { Request, Response } from 'express';
import LoginCustomerService from 'src/services/customerService/loginCustomer';

class LoginCustomerController {

    public async login(req: Request, res: Response) {

        const { email, password } = req.body;


        const loginCusomer = new LoginCustomerService();

        const customer = await loginCusomer.signIn({
            email,
            password
        });


        return res.status(200).json({ customer });

    }
}

export default new LoginCustomerController();