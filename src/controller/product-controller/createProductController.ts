import { Request, Response } from "express";
import UpdateImageProductService from "src/services/product_service/updateImageProductService";
import CreateProductService from "src/services/product_service/createProductService";

class CreateProductController {

    public async create(req: Request, res: Response) {

        const productService = new CreateProductService();
        const { name, price, quantity, categoryId } = req.body;

        console.log(">>>>>>>>>>>>>>>>>>>>>>>>", req.body)

        const product = await productService.createProductService({
            name,
            price,
            quantity,
            categoryId,
            image: req.file?.filename
        })
        console.log(">>>>>>>>>>>>>>>>>>>>>report sendo salvo", req.file?.path)
        return res.status(201).json({ message: 'Product created succcesfully' });
    }
}

export default new CreateProductController();