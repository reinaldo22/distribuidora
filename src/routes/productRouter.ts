import { Router } from 'express';
import multer from 'multer';
import ProductController from '../controller/product-controller/productController';
import uploadConfig from '../config/upload';
import CreateProductController from 'src/controller/product-controller/createProductController';
import ListProductController from 'src/controller/product-controller/listProductController';
import UpdateproductController from 'src/controller/product-controller/updateproductController';
import UpdateImageProductController from 'src/controller/product-controller/updateImageProductController';
import DeleteProductController from 'src/controller/product-controller/deleteProductController';

const routes = Router()
const upload = multer(uploadConfig);

routes.post('/product', upload.single('upload'), CreateProductController.create);
routes.get('/product', ListProductController.listProductController);
routes.put('/product/:id', UpdateproductController.updateProductController);
routes.patch('/updateImageProduct/:id', upload.single('upload'), UpdateImageProductController.updateImageProductController);
routes.delete('/product/:id', DeleteProductController.deleteProductController);
export default routes;