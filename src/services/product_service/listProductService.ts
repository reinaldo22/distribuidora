import { getRepository } from "typeorm";
import { Product } from "src/model/product";



class ListProductService {

    public async listProductsService(): Promise<Product[]> {

        const allProducts = await getRepository(Product).find({
            relations: ['categoryId']
        })
        return allProducts;
    }


}

export default ListProductService;