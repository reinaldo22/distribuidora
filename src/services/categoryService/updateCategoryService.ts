import AppError from "@shared/error/AppError";
import { CategoryRepositorie } from "src/repositories/categoryRepositorie";
import {  getCustomRepository } from "typeorm";


interface ICategory {
    id?: string;
    name: string;
}

class UpdateCategoryServices {



    public async updateCategoryService({ id, name }: ICategory) {

        const categoryRepositorie = getCustomRepository(CategoryRepositorie);

        const category = await categoryRepositorie.findOne(id);
        if (!category) {
            throw new AppError('Category not found.', 404);
        }
        const categoryExists = await categoryRepositorie.findByName(name);
        if (categoryExists) {
            throw new AppError('There is already one product with this name.', 404);
        }
        category.name = name;

        await categoryRepositorie.update(category.id, category);

        return category;

    }

}

export default UpdateCategoryServices;