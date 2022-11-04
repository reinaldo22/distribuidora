import { Request, Response } from "express";
import CreateProductService from "src/services/productService/createProductService";


interface IFile{
    firebaseURL: string | undefined;
}
class CreateProductController {

    public async create(req: Request, res: Response) {

  
        const productService = new CreateProductService();

        const { name, price, quantity, categoryId } = req.body;
        const { firebaseURL } = req.file as unknown as IFile;

        

        console.log(">>>>>>>>>>>>>body>>>>>>>>>>>", req.body);
        const product = await productService.createProductService({
            name,
            price,
            quantity,
            categoryId,
            image: firebaseURL
        })
        console.log(">>>>>>>>>>>>>>>>>>>>>report sendo salvo", req.file)
        return res.status(201).json({ message: 'Product created succcesfully' });
    }
}

export default new CreateProductController();