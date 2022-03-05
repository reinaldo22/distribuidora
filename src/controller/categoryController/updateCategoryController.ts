import { Request, Response } from "express";
import UpdateCategoryServices from "src/services/categoryService/updateCategoryService";

class UpdateCategoryController {


    public async updateCategoryController(req: Request, res: Response) {

        const { name } = req.body
        const { id } = req.params

        console.log("=====================body", id)
        const updateProductService = new UpdateCategoryServices();

        const category = await updateProductService.updateCategoryService({
            name,
            id
        })

        return res.status(201).json(category)
    }


}

export default new UpdateCategoryController();