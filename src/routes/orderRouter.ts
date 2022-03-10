import { Router } from 'express'
import { verifyToken } from 'src/middlewares/authJWT';
import CreateOrdersController from '../controller/ordersController/createOrdersController';
import OrdersController from '../controller/ordersController/showOrdersController';
import { rolesAdmin } from '../middlewares/verifyRoles';
import { rolesCustomer } from '../middlewares/verifyRoles';
const routes = Router();

routes.post('/order', [verifyToken, rolesCustomer], CreateOrdersController.create);
routes.get('/order/:id',[verifyToken, rolesAdmin], OrdersController.show);

export default routes;