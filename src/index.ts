import 'reflect-metadata';
import 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import AppError from './shared/error/AppError';
import './database/connect';
import cors from 'cors';
import morgan from 'morgan';
import uploadConfig from './config/upload';
import './database/connect';
import productRouter from '../src/routes/productRouter';
import categoryRouter from '../src/routes/categoryRouter';
import adminRouter from '../src/routes/adminRouter';
import customerRouters from '../src/routes/customerRouter';
import orderRouter from '../src/routes/orderRouter';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());

app.use('/files', express.static(uploadConfig.directory))
app.use(productRouter);
app.use(categoryRouter);
app.use(adminRouter);
app.use(customerRouters);
app.use(orderRouter);

app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => {
        if (error instanceof AppError) {
            return response.status(error.statusCode).json({
                status: 'error',
                message: error.message,
            });
        }
        console.log(error)
        return response.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    },
);

app.listen(process.env.PORTA, () => console.log("Server started!"));