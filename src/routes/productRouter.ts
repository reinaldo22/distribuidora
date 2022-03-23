import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';
import CreateProductController from 'src/controller/productController/createProductController';
import ListProductController from 'src/controller/productController/listProductController';
import UpdateproductController from 'src/controller/productController/updateProductController';
import UpdateImageProductController from 'src/controller/productController/updateImageProductController';
import DeleteProductController from 'src/controller/productController/deleteProductController';
import { verifyToken } from 'src/middlewares/authJWT';
import { rolesAdmin } from 'src/middlewares/verifyRoles';

const routes = Router()
const upload = multer(uploadConfig);
routes.post('/product', [verifyToken, rolesAdmin], upload.single('upload'), CreateProductController.create);
routes.get('/product', [verifyToken, rolesAdmin], ListProductController.listProductController);
routes.put('/product/:id', [verifyToken, rolesAdmin], UpdateproductController.updateProductController);
routes.patch('/updateImageProduct/:id', [verifyToken, rolesAdmin], upload.single('upload'), UpdateImageProductController.updateImageProductController);
routes.delete('/product/:id', [verifyToken, rolesAdmin], DeleteProductController.deleteProductController);
export default routes;