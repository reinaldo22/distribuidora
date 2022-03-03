import { Router } from 'express'
import AdminController from '../controller/adminController/adminController';


const routes = Router();

routes.post('/admin', AdminController.createAdminController);
routes.post('/validated', AdminController.validationCode);
export default routes;