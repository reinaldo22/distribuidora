import Admin from "src/model/admin";
import { EntityRepository, Repository } from "typeorm"

@EntityRepository(Admin)
class AdminRepositorie extends Repository<Admin>{

    public async findByName(name: string): Promise<Admin | undefined> {

        const admin = await this.findOne({
            where: { name }
        })
        return admin;
    }
    public async findByEmail(email: string): Promise<Admin | undefined> {

        const admin = await this.findOne({
            where: { email }
        })
        return admin;
    }
    public async findByCodeEmail(code: string, email: string): Promise<Admin | undefined> {
        const admin = await this.findOne({
            where: { code, email }
        });
        return admin;
    }

}

export { AdminRepositorie };