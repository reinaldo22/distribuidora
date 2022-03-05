import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';
import CreateProductController from 'src/controller/productController/createProductController';
import ListProductController from 'src/controller/productController/listProductController';
import UpdateproductController from 'src/controller/productController/updateProductController';
import UpdateImageProductController from 'src/controller/productController/updateImageProductController';
import DeleteProductController from 'src/controller/productController/deleteProductController';

const routes = Router()
const upload = multer(uploadConfig);

routes.post('/product', upload.single('upload'), CreateProductController.create);
routes.get('/product', ListProductController.listProductController);
routes.put('/product/:id', UpdateproductController.updateProductController);
routes.patch('/updateImageProduct/:id', upload.single('upload'), UpdateImageProductController.updateImageProductController);
routes.delete('/product/:id', DeleteProductController.deleteProductController);
export default routes;