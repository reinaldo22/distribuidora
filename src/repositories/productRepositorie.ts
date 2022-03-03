import { Product } from "../model/product";
import { EntityRepository, Repository } from "typeorm";

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
}

export { ProductRepositorie };