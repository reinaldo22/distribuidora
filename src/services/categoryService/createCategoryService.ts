import AppError from "@shared/error/AppError";
import { Category } from "src/model/categories";
import { Product } from "src/model/product";
import { CategoryRepositorie } from "src/repositories/categoryRepositorie";
import { getConnection, getCustomRepository, getRepository } from "typeorm";


interface ICategory {
    id?: string;
    name: string;
}

class CreateCategoryServices {

    public async createCategoryService({ name }: ICategory) {
        const categoryRepositorie = getCustomRepository(CategoryRepositorie);
        const categoryExists = await categoryRepositorie.findByName(name);
        if (categoryExists) {
            throw new AppError("There is already one category with this name", 404);
        }

        const category = await categoryRepositorie.create({
            name
        })
        await categoryRepositorie.save(category);

        return category;
    }

}

export default CreateCategoryServices;