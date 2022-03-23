import { Request, Response } from 'express';
import CreateCustomerService from 'src/services/customerService/createCustomerService';

class CreateCustomerController {
    public async createCustomerController(req: Request, res: Response) {

        const {
            name,
            email,
            password,
            forma_pagamento,
            endereco,
            cpf
        } = req.body;

        const customerService = new CreateCustomerService();

        const customer = await customerService.createCustomerService({
            name,
            email,
            password,
            forma_pagamento,
            endereco,
            cpf
        })
        return res.status(201).json({ message: "Cliente criado. Enviamos um código de verificação para seu e-mail!" });
    }


}
export default new CreateCustomerController();