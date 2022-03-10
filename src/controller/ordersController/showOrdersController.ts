
import { Request, Response } from "express";
import ShowOrderService from "src/services/createOrderService/showOrderProduct";

class OrdersController {

    public async show(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const showOrder = new ShowOrderService();

        const order = await showOrder.execute({ id });

        const soma = order.order_products.map(product => (product.price * product.quantity).toPrecision(4))

        var mounth = 0;
        for (let i = 0; i < soma.length; i++) {

            mounth += parseFloat(soma[i]);
        }
        var total = mounth.toPrecision(5);

        return res.json({ order, soma, total });

    }
}

export default new OrdersController();