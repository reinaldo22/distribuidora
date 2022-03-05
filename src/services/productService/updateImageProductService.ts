import AppError from "@shared/error/AppError";
import { ProductRepositorie } from "src/repositories/productRepositorie";
import { getCustomRepository } from "typeorm";
import path from 'path';
import fs from 'fs';
import uploadConfig from '../../config/upload';

interface IRequest {
    product_id: string;
    imageFilename?: string;
}

class UpdateImageProductService {
    public async updateImageProductService({ product_id, imageFilename }: IRequest) {

        const productRepositorie = getCustomRepository(ProductRepositorie);

        const product = await productRepositorie.findOne(product_id);
        if (!product) {
            throw new AppError('Product not found.', 404);
        }

        if (product.image) {
            const imageFilePath = path.join(uploadConfig.directory, product.image);
            const imageExists = await fs.promises.stat(imageFilePath);

            if (imageExists) {
                await fs.promises.unlink(imageFilePath);
            }
        }

        product.image = imageFilename;

        await productRepositorie.update(product.id, product)

        return product;
    }
}
export default UpdateImageProductService;