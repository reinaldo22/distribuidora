import { Router } from 'express'
import CustomerController from '../controller/customerController/customerController';


const routes = Router();

routes.post('/customer', CustomerController.createCustomerController);
routes.post('/customer/validated', CustomerController.validationCode);
export default routes;