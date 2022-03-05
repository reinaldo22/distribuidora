import { Request, Response } from "express";
import UpdateAdminService from "src/services/adminService/updateAdminService";

class UpdateAdminController {
    public async updateAdminController(req: Request, res: Response) {
        const { name, email, password } = req.body;
        const { id } = req.params

        const updateadminService = new UpdateAdminService();

        const admin = await updateadminService.updateAdmin({
            id,
            name,
            email,
            password
        })

        return res.status(200).json({ message: admin });

    }
}
export default new UpdateAdminController();