import AppError from "@shared/error/AppError";
import { getCustomRepository } from "typeorm";
import bcrypt from 'bcryptjs';
import Util from "src/util/Util";
import { CustomerRepositorie } from "src/repositories/customerReposiorie";
import { cpf as cpfValidator } from 'cpf-cnpj-validator';


interface IACustomer {
    id?: string;
    email: string;
    password: string;
    name: string;
    endereco: string;
    forma_pagamento: string;
    cpf: string;
    code?: string;
}

class CustomerService {
    public async createAdminService({ name, email, password, code, forma_pagamento, endereco, cpf }: IACustomer) {

        const utilitario = new Util();
        let generatedCode = await utilitario.sendCode()

        const customerRepositorie = getCustomRepository(CustomerRepositorie);


        const customerExists = await customerRepositorie.findByName(name);
        if (customerExists) {
            throw new AppError("This name already exists", 404);
        }

        const emailExists = await customerRepositorie.findByEmail(email);
        if (emailExists) {
            throw new AppError("This email already exists", 404);
        }
        // valida cpf
        const cpfExists = await customerRepositorie.findByCpf(cpf);
        if (cpfExists) {
            throw new AppError("Cpf already in use", 404);
        }

        const validCpf = cpfValidator.isValid(cpf)
        if (validCpf === false) {
            throw new AppError("Cpf not valid", 404);
        }

        const salt = await bcrypt.genSalt(1);
        const passwordHashed = await bcrypt.hash(password, salt);

        const customer = customerRepositorie.create({
            name,
            email,
            password: passwordHashed,
            validated: false,
            forma_pagamento,
            endereco,
            cpf,
            code: generatedCode,
        });

        await utilitario.sendEmail(email, generatedCode);

        await customerRepositorie.save(customer);
    }

}
export default CustomerService;