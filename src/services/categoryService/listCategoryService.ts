import AppError from "@shared/error/AppError";
import { Category } from "src/model/categories";
import { Product } from "src/model/product";
import { CategoryRepositorie } from "src/repositories/categoryRepositorie";
import { getConnection, getCustomRepository, getRepository } from "typeorm";



class ListCategoryServices {

    public async listCategoryService(): Promise<Category[]> {

        const categoryRepositorie = getCustomRepository(CategoryRepositorie);

        const category = await categoryRepositorie.find();

        return category;
    }

}

export default ListCategoryServices;