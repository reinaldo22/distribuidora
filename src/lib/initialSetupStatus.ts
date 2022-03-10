import { Status } from "src/model/status";
import { getConnection, getRepository } from "typeorm";

export default async function executeStatus() {

    try {
        const sum = await getRepository(Status)
            .createQueryBuilder("status")
            .select("SUM(status.id)", "sum")
            .getCount();
        if (sum > 0) {
            return;
        }
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into(Status)
            .values([
                { name: "PROCESSANDO" },
                { name: "SEPARANDO" },
                { name: "ENTREGA" },
            ])
            .execute();
    
    } catch (error) {
        console.log(error)
    }
}

