import { Request, Response } from 'express';
import PurchaseDemandService from '../../services/createOrderService/purchaseDemand';

class PurchaseDemandController {

    public async all(req: Request, res: Response) {

        const purchaseService = new PurchaseDemandService();
        const order = await purchaseService.allOrders()
        return res.status(200).json({ order });
    }

}

export default new PurchaseDemandController();