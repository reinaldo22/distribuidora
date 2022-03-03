import { Router } from 'express'
import CategoryController from '../controller/categoryController/categoryController';


const routes = Router();

routes.post('/category', CategoryController.createCategory);
routes.get('/category', CategoryController.listCategoryController);
routes.put('/category/:id', CategoryController.updateCategoryController);
routes.delete('/category/:id', CategoryController.deleteCategoryController);
export default routes;