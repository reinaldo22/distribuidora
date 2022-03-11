import AppError from "@shared/error/AppError";
import Orders from "src/model/order";
import { Status } from "src/model/status";
import { getRepository } from "typeorm/globals";

interface IProcess {
    id: any;
    status: Status;
}

class CancelOrderService {

    public async cancel({ id, status }: IProcess) {


        const order = await getRepository(Orders).findOne(id);
        if (!order) {
            throw new AppError('Pedido não encontrado.', 404);
        }

        order.status = status
        await getRepository(Orders).update(order.id, order)

        return order;
    }

}

export default CancelOrderService;