import { Category } from "src/model/categories";
import { CategoryRepositorie } from "src/repositories/categoryRepositorie";
import { getCustomRepository } from "typeorm";



class ListCategoryServices {

    public async listCategoryService(): Promise<Category[]> {

        const categoryRepositorie = getCustomRepository(CategoryRepositorie);

        const category = await categoryRepositorie.find();

        return category;
    }

}

export default ListCategoryServices;