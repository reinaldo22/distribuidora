import { Request, Response } from "express";
import UpdateImageProductService from "src/services/product_service/updateImageProductService";


class UpdateImageProductController {


    public async updateImageProductController(req: Request, res: Response) {
        const { id } = req.params

        console.log("=====================body", req.body)
        const updateImageProductService = new UpdateImageProductService();

        const product = await updateImageProductService.updateImageProductService({
            product_id: id,
            imageFilename: req.file?.filename
        });
        return res.status(201).json(product);
    }


}

export default new UpdateImageProductController();