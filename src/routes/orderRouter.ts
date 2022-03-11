import { Router } from 'express'
import { verifyToken } from 'src/middlewares/authJWT';
import CreateOrdersController from '../controller/ordersController/createOrdersController';
import OrdersController from '../controller/ordersController/showOrdersController';
import { rolesAdmin } from '../middlewares/verifyRoles';
import { rolesCustomer } from '../middlewares/verifyRoles';
import ProcessOrderController from 'src/controller/ordersController/processOrderController';

const routes = Router();

routes.post('/order', [verifyToken, rolesCustomer], CreateOrdersController.create);
routes.get('/order/:id', [verifyToken, rolesAdmin], OrdersController.show);
routes.put('/order/:id', [verifyToken, rolesAdmin], ProcessOrderController.process);
export default routes;