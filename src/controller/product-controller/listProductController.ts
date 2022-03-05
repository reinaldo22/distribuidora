import { Request, Response } from "express";
import ListProductService from "src/services/product_service/listProductService";

class ListProductController {

    public async listProductController(req: Request, res: Response) {

        const listProducts = new ListProductService();

        const products = await listProducts.listProductsService();

        return res.status(200).json(products);
    }
}

export default new ListProductController();