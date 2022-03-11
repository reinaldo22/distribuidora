import { Router } from 'express'
import { verifyToken } from 'src/middlewares/authJWT';
import CreateOrdersController from '../controller/ordersController/createOrdersController';
import OrdersController from '../controller/ordersController/showOrdersController';
import { rolesAdmin } from '../middlewares/verifyRoles';
import { rolesCustomer } from '../middlewares/verifyRoles';
import ProcessOrderController from 'src/controller/ordersController/processOrderController';
import SeparateOrderController from '../controller/ordersController/separateOrderController';
import DeliveryOrderController from 'src/controller/ordersController/deliveryOrderController';
import CancelOrderController from 'src/controller/ordersController/cancelOrderController';

const routes = Router();

routes.post('/order', [verifyToken, rolesCustomer], CreateOrdersController.create);
routes.get('/order/:id', [verifyToken, rolesAdmin], OrdersController.show);
routes.put('/order/:id', [verifyToken, rolesAdmin], ProcessOrderController.process);
routes.put('/separate/:id', [verifyToken, rolesAdmin], SeparateOrderController.separate);
routes.put('/delivery/:id', [verifyToken, rolesAdmin], DeliveryOrderController.delivery);
routes.put('/cancel/:id', [verifyToken], CancelOrderController.cancel);
export default routes;