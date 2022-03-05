import { Request, Response } from "express";
import UpdateProductService from "src/services/productService/updateProductService";

class UpdateProductController {

    public async updateProductController(req: Request, res: Response) {

        const { name, price, quantity, categoryId } = req.body
        const { id } = req.params

        console.log("=====================body", req.body)
        const updateProductService = new UpdateProductService();

        const product = await updateProductService.updateProductService({
            id,
            name,
            price,
            quantity,
            categoryId,
            image: req.file?.filename
        })

        return res.status(201).json(product)
    }
}

export default new UpdateProductController();