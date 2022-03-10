import AppError from '@shared/error/AppError';
import { CustomerRepositorie } from 'src/repositories/customerReposiorie';
import { OrderRepositorie } from 'src/repositories/orderRepositorie';
import { ProductRepositorie } from 'src/repositories/productRepositorie';
import { getCustomRepository } from 'typeorm';
import Orders from '../../model/order';


interface IRequest {
    id: string;
}


class ShowOrderService {

    public async execute({ id }: IRequest): Promise<Orders> {

        const orderRepositorie = getCustomRepository(OrderRepositorie);

        const order = await orderRepositorie.findbyId(id);

        if (!order) {
            throw new AppError('Order not found.', 404);
        }


        return order;
    }

}

export default ShowOrderService;