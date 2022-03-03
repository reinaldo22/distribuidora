import AppError from "@shared/error/AppError";
import { Category } from "src/model/categories";
import { Product } from "src/model/product";
import { CategoryRepositorie } from "src/repositories/categoryRepositorie";
import { getConnection, getCustomRepository, getRepository } from "typeorm";


interface ICategory {
    id?: string;
    name: string;
}
interface ICategoryId {
    id?: string;
}
class CategoryServices {

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
    public async listCategoryService(): Promise<Category[]> {

        const categoryRepositorie = getCustomRepository(CategoryRepositorie);

        const category = await categoryRepositorie.find();

        return category;
    }

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

    public async deletCategoryService({ id }: ICategoryId) {


        const productCategoryRepositorie = await getConnection()
            .createQueryBuilder()
            .update(Product)
            .set({
                categoryId: () => "",
            })
            .where("categoryId = :categoryId", { categoryId: id })
            .execute();

        const categoryategoryRepositorie = await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Category)
            .where("id = :id", { id: id })
            .execute();


        if (categoryategoryRepositorie.affected === 0) {
            throw new AppError("This category does not exist", 404);
        }
    }
}

export default CategoryServices;