import { Product } from "../model/product";
import { EntityRepository, Repository } from "typeorm";
import Orders from "src/model/order";

@EntityRepository(Orders)
class OrderRepositorie extends Repository<Orders>{
    public async findbyId(id: string): Promise<Orders | undefined> {
        const order = await this.findOne(id, {
            relations: ['order_products', 'customer'],
        })

        return order;
    }
}

export { OrderRepositorie };