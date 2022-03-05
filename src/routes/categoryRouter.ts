import { Router } from 'express'
import UpdateCategoryController from 'src/controller/categoryController/updateCategoryController';
import CreateCategoryController from 'src/controller/categoryController/createCategoryController';
import ListCategoryController from 'src/controller/categoryController/listCategoryController';
import DeleteCategoryController from 'src/controller/categoryController/deleteCategoryController';

const routes = Router();

routes.post('/category', CreateCategoryController.createCategory);
routes.get('/category', ListCategoryController.listCategoryController);
routes.put('/category/:id', UpdateCategoryController.updateCategoryController);
routes.delete('/category/:id', DeleteCategoryController.deleteCategoryController);
export default routes;