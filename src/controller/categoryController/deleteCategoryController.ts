import { Request, Response } from "express";
import DeleteCategoryServices from "src/services/categoryService/deleteCategoryService";
class DeleteCategoryController {


    public async deleteCategoryController(req: Request, res: Response) {

        const deleteCategoryService = new DeleteCategoryServices();

        const { id } = req.params;

        await deleteCategoryService.deletCategoryService({ id })

        return res.status(201).json({ message: 'Category successfully deleted!' })
    }
}

export default new DeleteCategoryController();