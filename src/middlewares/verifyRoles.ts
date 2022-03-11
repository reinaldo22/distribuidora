import AppError from '@shared/error/AppError';
import { NextFunction, Request, Response } from 'express'
import { AdminRepositorie } from 'src/repositories/adminRepositorie';
import { CustomerRepositorie } from 'src/repositories/customerReposiorie';
import { getCustomRepository } from 'typeorm';

export const rolesAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.userId;

    const adminRepositorie = getCustomRepository(AdminRepositorie);

    const admin = await adminRepositorie.findOne(id);

    if (admin?.role !== 'admin') {
        throw new AppError("Este usuário não tem autorização para efetuar esta operação");
    }
    next();
}

export const rolesCustomer = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.userId;

    const customerRepositorie = getCustomRepository(CustomerRepositorie);

    const customer = await customerRepositorie.findById(id)
    if (customer?.role !== "customer") {
        throw new AppError('Você não possui dados de cliente');
    }
    next()

}