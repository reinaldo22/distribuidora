import AppError from "@shared/error/AppError";
import { Category } from "src/model/categories";
import { Product } from "src/model/product";
import { getConnection } from "typeorm";


interface ICategoryId {
    id?: string;
}
class DeleteCategoryServices {

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

export default DeleteCategoryServices;