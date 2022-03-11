import AppError from '@shared/error/AppError';
import { OrderRepositorie } from 'src/repositories/orderRepositorie';
import { StatusRepositorie } from 'src/repositories/statusRepositorie';
import { getCustomRepository } from 'typeorm';
import Orders from '../../model/order';


interface IRequest {
    id: string;
}


class ShowOrderService {

    public async execute({ id }: IRequest) {

        const orderRepositorie = getCustomRepository(OrderRepositorie);

        const order = await orderRepositorie.findbyId(id);
        if (!order) {
            throw new AppError('Order not found.', 404);
        }

        const soma = order.order_products.map(product => (product.price * product.quantity).toPrecision(4))

        var mounth = 0;
        for (let i = 0; i < soma.length; i++) {

            mounth += parseFloat(soma[i]);
        }
        var total = mounth.toPrecision(5);

        return ({ order, soma, total })
    }

}

export default ShowOrderService;