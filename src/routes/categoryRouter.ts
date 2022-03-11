import { Router } from 'express'
import UpdateCategoryController from 'src/controller/categoryController/updateCategoryController';
import CreateCategoryController from 'src/controller/categoryController/createCategoryController';
import ListCategoryController from 'src/controller/categoryController/listCategoryController';
import DeleteCategoryController from 'src/controller/categoryController/deleteCategoryController';
import { verifyToken } from 'src/middlewares/authJWT';
import { rolesAdmin } from 'src/middlewares/verifyRoles';

const routes = Router();

routes.post('/category',[verifyToken, rolesAdmin], CreateCategoryController.createCategory);
routes.get('/category',[verifyToken, rolesAdmin], ListCategoryController.listCategoryController);
routes.put('/category/:id',[verifyToken, rolesAdmin], UpdateCategoryController.updateCategoryController);
routes.delete('/category/:id',[verifyToken, rolesAdmin], DeleteCategoryController.deleteCategoryController);
export default routes;