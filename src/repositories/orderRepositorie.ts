import { EntityRepository, Repository } from "typeorm";
import Orders from "src/model/order";
import Customer from "src/model/customer";


interface IRequest {
    customer: Customer;
    products: IProduct[];
}

interface IProduct {
    product_id: string;
    price: number;
    quantity: number;
}
@EntityRepository(Orders)
class OrderRepositorie extends Repository<Orders>{
    public async findbyId(id: string): Promise<Orders | undefined> {
        const order = await this.findOne(id, {
            relations: ['order_products', 'customer', 'status'],
        })

        return order;
    }

    public async createOrder({ customer, products }: IRequest): Promise<Orders> {
        const order = this.create({
            customer,
            order_products: products
        })

        await this.save(order);

        return order;
    }
    
}

export { OrderRepositorie };