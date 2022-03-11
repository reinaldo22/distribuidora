import { Router } from 'express'
import CreateAdminController from '../controller/adminController/createAdminController';
import registerAdminController from 'src/controller/adminController/registerAdminController';
import updateAdminController from 'src/controller/adminController/updateAdminController';
import ForgotAdminPasswordController from '../controller/adminController/fortgotPasswordAdminController';
import { verifyToken } from '../middlewares/authJWT';
import { rolesAdmin } from '../middlewares/verifyRoles';
import PurchaseDemandController from '../controller/ordersController/purchaseDemandController';
import loginAdminController from 'src/controller/adminController/loginAdminController';

const routes = Router();

routes.post('/admin', CreateAdminController.createAdminController);
routes.post('/admin/login', loginAdminController.login);
routes.post('/validated', registerAdminController.validationCode);
routes.put('/admin/:id', [verifyToken, rolesAdmin], updateAdminController.updateAdminController);
routes.post('/admin/forgotpass', ForgotAdminPasswordController.forgotPassController);
routes.get('/admin/allOrders', [verifyToken, rolesAdmin], PurchaseDemandController.all);
export default routes;