import { Request, Response } from 'express';
import UpdateCustomerService from 'src/services/customerService/updateCustomerService';

class UpdateCustomerController {
    

    public async updateCustomer(req: Request, res: Response) {
        const { id } = req.params
        const { name, endereco, email } = req.body;

        const customerService = new UpdateCustomerService();

        const customer = await customerService.updateCustomer({
            id,
            name,
            endereco,
            email
        })

        return res.status(200).json({ customer })
    }
}
export default new UpdateCustomerController();