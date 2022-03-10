import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import AppError from '@shared/error/AppError';

interface TokenPayload {
    id: string;
    iat: number;
    exp: number;
}

export const verifyToken = async (next: NextFunction, req: Request, res: Response) => {

    const token = req.headers.authorization;

    if (!token) {
        throw new AppError("Não possui token, favor realizar authenticação", 404);
    }

    try {

        const data = jwt.decode(token);

        const { id } = data as TokenPayload;

        req.userId = id;

        return next();

    } catch (error) {
        throw new AppError(`message: ${error}`, 404);
    }
}