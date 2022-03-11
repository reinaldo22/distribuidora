import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
// import { getCustomRepository } from 'typeorm';
// import DoctorRepository from '../repositorie/doctorRepositorie';
/*import UserRepository from '../repositorie/userRepositorie';*/

interface TokenPayload {
    id: string;
    iat: number;
    exp: number;
}

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers.authorization;

    if (!token) return res.status(404).json({ message: 'Does not have token' });


    try {

        const data = jwt.decode(token)
        const { id } = data as TokenPayload;

        req.userId = id;

        return next();


    } catch (error) {
        return res.status(401).json({ message: 'Erro ', error });
    }

};
