import AppError from "../../shared/error/AppError";
import uploadConfig from '../../config/upload';
import { getCustomRepository, getRepository } from "typeorm";
import { ProductRepositorie } from "../../repositories/productRepositorie";
import { Product } from "src/model/product";
import { Category } from "src/model/categories";
import { CategoryRepositorie } from "src/repositories/categoryRepositorie";
import path from 'path';
import fs from 'fs';


interface IProduct {
    id?: string
    name: string;
    price: number;
    quantity: number;
    image?: string;
    categoryId?: Category;
}
interface IDproduct {
    id?: string
}
class ProductService {

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
    public async listProductsService(): Promise<Product[]> {

        const allProducts = await getRepository(Product).find({
            relations: ['categoryId']
        })
        return allProducts;
    }

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

    public async deletProductService({ id }: IDproduct) {

        const productRepository = getCustomRepository(ProductRepositorie);
        const product = await productRepository.findOne(id);

        if (!product) {
            throw new AppError("Product not found.", 404);
        }
        if (product.image) {
            const imageFilePath = path.join(uploadConfig.directory, product.image)
            const imageExists = await fs.promises.stat(imageFilePath);

            if (imageExists) {
                await fs.promises.unlink(imageFilePath);
            }
        }

        await productRepository.remove(product)

    }

}

export default ProductService;