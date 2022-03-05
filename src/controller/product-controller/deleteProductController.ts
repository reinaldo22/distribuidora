import { Request, Response } from "express";
import UpdateImageProductService from "src/services/product_service/updateImageProductService";
import DeleteProductService from "src/services/product_service/deleteProductService";

class DeleteProductController {

    public async deleteProductController(req: Request, res: Response) {

        const deleteProductService = new DeleteProductService();

        const { id } = req.params;

        await deleteProductService.deletProductService({ id })

        return res.status(201).json({ message: 'Product successfully deleted!' })
    }
}

export default new DeleteProductController();