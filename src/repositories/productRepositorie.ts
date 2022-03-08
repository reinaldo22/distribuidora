import { Product } from "../model/product";
import { EntityRepository, In, Repository } from "typeorm";

interface IFindProducts {
    id: string;
}


@EntityRepository(Product)
class ProductRepositorie extends Repository<Product>{
    public async findbyname(name: string): Promise<Product | undefined> {
        const product = await this.findOne({
            where: { name }
        })

        return product;
    }
    public async findbyId(id: string): Promise<Product | undefined> {
        const product = await this.findOne({
            where: { id }
        })

        return product;
    }

    public async findAllByIds(products: IFindProducts[]): Promise<Product[]> {
        const productId = products.map(product => product.id);

        const produtsExixts = await this.find({
            where: {
                id: In(productId),
            }
        })
        return produtsExixts;
    }
}

export { ProductRepositorie };