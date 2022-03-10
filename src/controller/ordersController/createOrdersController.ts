import { Request, Response } from "express";
import CreateOrderService from "src/services/createOrderService/createOrderService";

class CreateOrdersController {

    public async create(req: Request, res: Response): Promise<Response> {

        const { customer_id, products } = req.body;

        const createOrder = new CreateOrderService();

        const order = await createOrder.execute({
            customer_id,
            products,
        })

        return res.json(order);

    }
}

export default new CreateOrdersController();