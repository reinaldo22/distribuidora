import { Router } from 'express'
import RegisterCustomerController from '../controller/customerController/registerCustomerController';
import CreateCustomerController from 'src/controller/customerController/createCustomerController';
import UpdateCustomerController from 'src/controller/customerController/updateCustomerController';
import FortgotPasswordCustomerController from 'src/controller/customerController/fortgotPasswordCustomerController';
import LoginCustomerController from 'src/controller/customerController/loginCustomerController';
const routes = Router();

routes.post('/customer', CreateCustomerController.createCustomerController);
routes.post('/customer/validated', RegisterCustomerController.validationCode);
routes.put('/customer/:id', UpdateCustomerController.updateCustomer);
routes.post('/customer/forgotpass', FortgotPasswordCustomerController.forgotPassController);
routes.post('/customer/login', LoginCustomerController.login);
export default routes;