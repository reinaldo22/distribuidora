import AppError from "@shared/error/AppError";
import { CustomerRepositorie } from "src/repositories/customerReposiorie";
import { getCustomRepository } from "typeorm";

interface ICustomer {
    email: string;
    code: string;
}

class ValidationRegisterService {

    public async validationRegister({ email, code }: ICustomer) {
        const customerRepositorie = getCustomRepository(CustomerRepositorie);
        const customer = await customerRepositorie.findByCodeEmail(code, email);

        console.log(">>>>>>>>>>>>>>>>>>>....",customer)
        if (!customer) {
            throw new AppError("Customer not found", 404);
        }

        if (customer?.validated === true) {
            throw new AppError("User already validated", 404);
        }
        customer.validated = true;
        await customerRepositorie.update(customer.id, customer);
    }

}
export default ValidationRegisterService;