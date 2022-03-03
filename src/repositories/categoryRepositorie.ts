import { Category } from "src/model/categories";
import { EntityRepository, Repository } from "typeorm"

@EntityRepository(Category)
class CategoryRepositorie extends Repository<Category>{

    public async findByName(name: string): Promise<Category | undefined> {

        const category = await this.findOne({
            where: { name }
        })
        return category;
    }

}

export { CategoryRepositorie };