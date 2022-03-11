import { OrderRepositorie } from "src/repositories/orderRepositorie";
import { getCustomRepository } from "typeorm";



class FindDemandService {

    public async allOrders() {

        const orderRepositorie = getCustomRepository(OrderRepositorie);

        const orders = await orderRepositorie.find({
            relations: ['order_products', 'status', 'customer'],
            where: { status: null }
        });

        return orders;
    }
}

export default FindDemandService;