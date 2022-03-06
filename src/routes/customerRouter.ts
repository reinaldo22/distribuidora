import { Router } from 'express'
import RegisterCustomerController from '../controller/customerController/registerCustomerController';
import CreateCustomerController from 'src/controller/customerController/createCustomerController';
import UpdateCustomerController from 'src/controller/customerController/updateCustomerController';
import fortgotPasswordCustomerController from 'src/controller/customerController/fortgotPasswordCustomerController';

const routes = Router();

routes.post('/customer', CreateCustomerController.createCustomerController);
routes.post('/customer/validated', RegisterCustomerController.validationCode);
routes.put('/customer/:id', UpdateCustomerController.updateCustomer);
routes.post('/customer/forgotpass', fortgotPasswordCustomerController.forgotPassController);

export default routes;