import { Request, Response } from "express";
import CreateCategoryServices from "src/services/categoryService/createCategoryService";

class CreateCategoryController {

    public async createCategory(req: Request, res: Response) {

        const categoryServices = new CreateCategoryServices();

        const { name } = req.body;

        const category = await categoryServices.createCategoryService({
            name
        });

        return res.status(201).json({ message: 'Category created succcesfully' })

    }

}

export default new CreateCategoryController();