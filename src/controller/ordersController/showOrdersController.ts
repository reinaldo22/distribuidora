
import { Request, Response } from "express";
import ShowOrderService from "src/services/createOrderService/showOrderProduct";

class OrdersController {

    public async show(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const showOrder = new ShowOrderService();

        const order = await showOrder.execute({ id });

        return res.status(200).json(order)

    }
}

export default new OrdersController();