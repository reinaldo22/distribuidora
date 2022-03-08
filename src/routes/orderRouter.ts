import { Router } from 'express'
import CreateOrdersController from '../controller/ordersController/createOrdersController';
import OrdersController from '../controller/ordersController/showOrdersController';

const routes = Router();

routes.post('/order', CreateOrdersController.create);
routes.get('/order/:id', OrdersController.show);

export default routes;