import { Router } from 'express'
import RegisterCustomerController from '../controller/customerController/registerCustomerController';
import createCustomerController from 'src/controller/customerController/createCustomerController';
import updateCustomerController from 'src/controller/customerController/updateCustomerController';


const routes = Router();

routes.post('/customer', createCustomerController.createCustomerController);
routes.post('/customer/validated', RegisterCustomerController.validationCode);
routes.put('/customer/:id', updateCustomerController.updateCustomer);
export default routes;