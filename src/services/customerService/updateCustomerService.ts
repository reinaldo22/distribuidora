import AppError from '@shared/error/AppError';
import { CustomerRepositorie } from 'src/repositories/customerReposiorie';
import { getCustomRepository, Not } from 'typeorm';


interface IACustomer {
    id?: string;
    email: string;
    password?: string;
    name: string;
    endereco: string;
    forma_pagamento?: string;
    cpf?: string;
    code?: string;
}

class UpdateCustomerService {

    public async updateCustomer({ id, name, email, password, code, forma_pagamento, endereco, cpf}: IACustomer) {
        const customerRepository = getCustomRepository(CustomerRepositorie);
        const customer = await customerRepository.findOne(id);

        if (!customer) {
            throw new AppError("Admin not fount!", 404);
        }
        const emailExists = await customerRepository.find({
            where: [
                {
                    email: email,
                    id: Not(id)
                }
            ]
        })

        if (emailExists.length > 0) {
            throw new AppError("This email already exists", 404);
        }

        customer.name = name;
        customer.endereco = endereco;
        customer.password;
        customer.cpf;
        customer.email = email;


        await customerRepository.update(customer.id, customer);

        return customer;
    }
}

export default UpdateCustomerService;