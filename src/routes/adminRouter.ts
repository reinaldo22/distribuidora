import { Router } from 'express'
import CreateAdminController from '../controller/adminController/createAdminController';
import registerAdminController from 'src/controller/adminController/registerAdminController';
import updateAdminController from 'src/controller/adminController/updateAdminController';
import ForgotAdminPasswordController from '../controller/adminController/fortgotPasswordAdminController';

const routes = Router();

routes.post('/admin', CreateAdminController.createAdminController);
routes.post('/validated', registerAdminController.validationCode);
routes.put('/admin/:id', updateAdminController.updateAdminController);
routes.post('/admin/forgotpass', ForgotAdminPasswordController.forgotPassController);
export default routes;