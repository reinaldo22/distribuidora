import { Request, Response } from 'express';
import ValidationRegisterService from 'src/services/customerService/customerValidationRegister';
import CustomerService from 'src/services/customerService/customerService';

class CustomerController {
    public async createCustomerController(req: Request, res: Response) {

        const {
            name,
            email,
            password,
            forma_pagamento,
            endereco,
            cpf
        } = req.body;

        const customerService = new CustomerService();

        const customer = await customerService.createAdminService({
            name,
            email,
            password,
            forma_pagamento,
            endereco,
            cpf
        })
        return res.status(201).json({ message: "Customer created succesfuly" });
    }
    public async validationCode(req: Request, res: Response) {

        const { email, code } = req.body;
        const validationCustomerService = new ValidationRegisterService();

        const customer = await validationCustomerService.validationRegister({
            code,
            email
        })
        return res.status(201).json({ message: "Customer validated succesfuly" });
    }
}
export default new CustomerController();