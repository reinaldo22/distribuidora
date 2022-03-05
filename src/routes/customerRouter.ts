import { Router } from 'express'
import RegisterCustomerController from '../controller/customerController/registerCustomerController';
import CreateCustomerController from 'src/controller/customerController/createCustomerController';
import UpdateCustomerController from 'src/controller/customerController/updateCustomerController';


const routes = Router();

routes.post('/customer', CreateCustomerController.createCustomerController);
routes.post('/customer/validated', RegisterCustomerController.validationCode);
routes.put('/customer/:id', UpdateCustomerController.updateCustomer);
export default routes;