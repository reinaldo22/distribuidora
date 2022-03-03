import { Request, Response } from "express";
import UpdateImageProductService from "src/services/product_service/updateImageProductService";
import ProductService from "../../services/product_service/productService";


class ProductController {

    public async create(req: Request, res: Response) {

        const productService = new ProductService();
        const { name, price, quantity, categoryId } = req.body;

        console.log(">>>>>>>>>>>>>>>>>>>>>>>>", req.body)

        const product = await productService.createProductService({
            name,
            price,
            quantity,
            categoryId,
            image: req.file?.filename
        })
        console.log(">>>>>>>>>>>>>>>>>>>>>report sendo salvo", req.file?.path)
        return res.status(201).json({ message: 'Product created succcesfully' });
    }

    public async listProductController(req: Request, res: Response) {

        const listProducts = new ProductService();

        const products = await listProducts.listProductsService();

        return res.status(200).json(products);
    }

    public async updateProductController(req: Request, res: Response) {

        const { name, price, quantity, categoryId } = req.body
        const { id } = req.params

        console.log("=====================body", req.body)
        const updateProductService = new ProductService();

        const product = await updateProductService.updateProductService({
            id,
            name,
            price,
            quantity,
            categoryId,
            image: req.file?.filename
        })

        return res.status(201).json(product)
    }

    public async updateImageProductController(req: Request, res: Response) {
        const { id } = req.params

        console.log("=====================body", req.body)
        const updateImageProductService = new UpdateImageProductService();

        const product = await updateImageProductService.updateImageProductService({
            product_id: id,
            imageFilename: req.file?.filename
        });
        return res.status(201).json(product);
    }

    public async deleteProductController(req: Request, res: Response) {

        const deleteProductService = new ProductService();

        const { id } = req.params;

        await deleteProductService.deletProductService({ id })

        return res.status(201).json({ message: 'Product successfully deleted!' })
    }
}

export default new ProductController();