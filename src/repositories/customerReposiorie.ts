import Customer from "src/model/customer";
import { EntityRepository, Repository } from "typeorm"

@EntityRepository(Customer)
class CustomerRepositorie extends Repository<Customer>{

    public async findByName(name: string): Promise<Customer | undefined> {

        const customer = await this.findOne({
            where: { name }
        })
        return customer;
    }
    public async findByEmail(email: string): Promise<Customer | undefined> {

        const customer = await this.findOne({
            where: { email }
        })
        return customer;
    }
    public async findByCodeEmail(code: string, email: string): Promise<Customer | undefined> {
        const customer = await this.findOne({
            where: { code, email }
        });
        return customer;
    }
    public async findByCpf(cpf: string): Promise<Customer | undefined> {
        const customer = await this.findOne({
            where: { cpf }
        });
        return customer;
    }

}

export { CustomerRepositorie };