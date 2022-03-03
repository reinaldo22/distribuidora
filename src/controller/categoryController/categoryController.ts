import { Request, Response } from "express";
import CategoryServices from "src/services/categoryService/categoryService";

class CategoryController {

    public async createCategory(req: Request, res: Response) {

        const categoryServices = new CategoryServices();

        const { name } = req.body;

        const category = await categoryServices.createCategoryService({
            name
        });

        return res.status(201).json({ message: 'Category created succcesfully' })

    }
    public async listCategoryController(req: Request, res: Response) {

        const listCategory = new CategoryServices();

        const category = await listCategory.listCategoryService();

        return res.status(200).json(category);
    }

    public async updateCategoryController(req: Request, res: Response) {

        const { name } = req.body
        const { id } = req.params

        console.log("=====================body", id)
        const updateProductService = new CategoryServices();

        const category = await updateProductService.updateCategoryService({
            name,
            id
        })

        return res.status(201).json(category)
    }

    public async deleteCategoryController(req: Request, res: Response) {

        const deleteCategoryService = new CategoryServices();

        const { id } = req.params;
       
        await deleteCategoryService.deletCategoryService({ id })

        return res.status(201).json({ message: 'Category successfully deleted!' })
    }
}

export default new CategoryController();