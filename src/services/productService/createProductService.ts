import AppError from "../../shared/error/AppError";
import { getCustomRepository } from "typeorm";
import { ProductRepositorie } from "../../repositories/productRepositorie";
import { Category } from "src/model/categories";
import { CategoryRepositorie } from "src/repositories/categoryRepositorie";



interface IProduct {
    id?: string
    name: string;
    price: number;
    quantity: number;
    image?: string;
    categoryId?: Category;
}

class CreateProductService {

    public async createProductService({ name, price, quantity, image, categoryId }: IProduct) {
        const productRepositorie = getCustomRepository(ProductRepositorie);
        const categoryRepositorie = getCustomRepository(CategoryRepositorie);
        const productExists = await productRepositorie.findbyname(name);
        const categoryExists = await categoryRepositorie.findOne(categoryId)

        if (productExists) {
            throw new AppError('There is already one product with this name', 404);
        }

        if (!categoryExists) {
            throw new AppError('There is already one category with this id', 404);
        }

        const product = await productRepositorie.create({
            name,
            price,
            quantity,
            image,
            categoryId: categoryExists
        })

        await productRepositorie.save(product)

        return product;
    }
}

export default CreateProductService;