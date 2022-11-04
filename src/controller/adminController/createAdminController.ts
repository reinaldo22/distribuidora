import { Request, Response } from "express";
import CreateAdminService from "src/services/adminService/createAdminService";

class CreateAdminController {
    public async createAdminController(req: Request, res: Response) {

        const { name, email, password } = req.body;

        const createAdminService = new CreateAdminService();

        const data = await createAdminService.createAdminService({
            name,
            email,
            password
        })
        return res.status(201).json({
            success: true,
            message: "Usuário criado com sucesso",
            data:data
        });
    }
}
export default new CreateAdminController();