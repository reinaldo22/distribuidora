import AppError from "@shared/error/AppError";
import { Request, Response } from "express";
import { Status } from "src/model/status";
import ProcessOrderService from "src/services/createOrderService/processOrderService";
import { getRepository } from "typeorm";

class ProcessOrderController {

    public async process(req: Request, res: Response) {

        const { id } = req.params;

        const processService = new ProcessOrderService();

        const statusExists = await getRepository(Status).findOne(1);
        if (!statusExists) {
            throw new AppError("Status nao encontrado");
        }
        const process = await processService.process({
            id,
            status: statusExists
        });


        return res.status(200).json(process);
    }
}

export default new ProcessOrderController();