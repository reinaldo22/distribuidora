import { Router } from 'express';
import multer from 'multer';
import CreateProductController from 'src/controller/productController/createProductController';
import ListProductController from 'src/controller/productController/listProductController';
import UpdateproductController from 'src/controller/productController/updateProductController';
import UpdateImageProductController from 'src/controller/productController/updateImageProductController';
import DeleteProductController from 'src/controller/productController/deleteProductController';
// import { uploadimages } from 'src/util/firebase';
import UpdateImageFirebase from '../services/firebaseService/updateImageFirebase';


const routes = Router()
const Multer = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024,
    }
})
// routes.post('/product', Multer.single('upload'), [uploadimages], CreateProductController.create);
routes.get('/product', ListProductController.listProductController);
routes.put('/product/:id', UpdateproductController.updateProductController);
routes.patch('/updateImageProduct/:id', Multer.single('upload'), UpdateImageProductController.updateImageProductController);
routes.delete('/product/:id', DeleteProductController.deleteProductController);
routes.get('/', UpdateImageFirebase.updateImageFirebase);
export default routes;