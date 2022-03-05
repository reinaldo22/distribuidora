import { Request, Response } from "express";
import ListCategoryServices from "src/services/categoryService/listCategoryService";

class ListCategoryController {

    public async listCategoryController(req: Request, res: Response) {

        const listCategory = new ListCategoryServices();

        const category = await listCategory.listCategoryService();

        return res.status(200).json(category);
    }
}

export default new ListCategoryController();