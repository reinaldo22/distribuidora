import { Router } from 'express';
import multer from 'multer';
import ProductController from '../controller/product-controller/productController';
import uploadConfig from '../config/upload';
const routes = Router()
const upload = multer(uploadConfig);

routes.post('/product', upload.single('upload'), ProductController.create);
routes.get('/product', ProductController.listProductController);
routes.put('/product/:id', ProductController.updateProductController);
routes.patch('/updateImageProduct/:id', upload.single('upload'), ProductController.updateImageProductController);
routes.delete('/product/:id', ProductController.deleteProductController);
export default routes;