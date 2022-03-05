import AppError from "../../shared/error/AppError";
import { getCustomRepository, getRepository } from "typeorm";
import { ProductRepositorie } from "../../repositories/productRepositorie";
import { Category } from "src/model/categories";



interface IProduct {
    id?: string
    name: string;
    price: number;
    quantity: number;
    image?: string;
    categoryId?: Category;
}

class UpdateProductService {


    public async updateProductService({ id, name, price, quantity }: IProduct) {

        const productRepositorie = getCustomRepository(ProductRepositorie);

        const product = await productRepositorie.findOne(id);
        if (!product) {
            throw new AppError('Product not found.', 404);
        }

        const productExists = await productRepositorie.findbyname(name);
        if (productExists) {
            throw new AppError('There is already one product with this name', 404);
        }

        product.name = name;
        product.price = price;
        product.quantity = quantity

        await productRepositorie.update(product.id, product);

        return product;

    }
}

export default UpdateProductService;