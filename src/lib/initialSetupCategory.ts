import { Category } from "src/model/categories";
import { getConnection, getRepository } from "typeorm";

export default async function execute() {

    try {
        const sum = await getRepository(Category)
            .createQueryBuilder("category")
            .select("SUM(category.id)", "sum")
            .getCount();
        if (sum > 0) {
            return;
        }
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into(Category)
            .values([
                { name: "CERVEJA" },
                { name: "GAS" },
                { name: "AGUA" },
                { name: "REFRIGERANTE" },
                { name: "OUTROS" },
            ])
            .execute();

    } catch (error) {
        console.log(error)
    }
}

