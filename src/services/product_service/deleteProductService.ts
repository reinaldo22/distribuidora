import AppError from "../../shared/error/AppError";
import uploadConfig from '../../config/upload';
import { getCustomRepository } from "typeorm";
import { ProductRepositorie } from "../../repositories/productRepositorie";
import path from 'path';
import fs from 'fs';


interface IDproduct {
    id?: string
}
class DeleteProductService {

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

export default DeleteProductService;