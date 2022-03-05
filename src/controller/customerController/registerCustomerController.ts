import { Request, Response } from 'express';
import CustomerValidationRegister from 'src/services/customerService/customerValidationRegister';

class RegisterCustomerController {
    
    public async validationCode(req: Request, res: Response) {

        const { email, code } = req.body;
        const validationCustomerService = new CustomerValidationRegister();

        const customer = await validationCustomerService.validationRegister({
            code,
            email
        })
        return res.status(201).json({ message: "Customer validated succesfuly" });
    }
}
export default new RegisterCustomerController();