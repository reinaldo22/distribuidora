import AppError from '@shared/error/AppError';
import { CustomerRepositorie } from 'src/repositories/customerReposiorie';
import { OrderRepositorie } from 'src/repositories/orderRepositorie';
import { ProductRepositorie } from 'src/repositories/productRepositorie';
import { getCustomRepository } from 'typeorm';
import Orders from '../../model/order';


interface IProducts {
    id: string;
    quantity: number;
}


interface IRequest {
    customer_id: string;
    products: IProducts[];
}


class CreateOrderService {

    public async execute({ customer_id, products }: IRequest): Promise<Orders> {

        const orderRepositorie = getCustomRepository(OrderRepositorie);
        const customerRepositorie = getCustomRepository(CustomerRepositorie);
        const productRepositorie = getCustomRepository(ProductRepositorie);

        const customerExists = await customerRepositorie.findById(customer_id);
        if (!customerExists) {
            throw new AppError('Could not find any customer with the given id.', 404);
        }

        //Se caso não tenha ids de produtos
        const productExists = await productRepositorie.findAllByIds(products);
        if (!productExists.length) {
            throw new AppError('Could not find any products with the given ids.', 404);
        }

        //Busca ids novamente
        const existsProductsIds = productExists.map(product => product.id);
        //Verifica id de produtos inexistentes
        const checkInexistentProducts = products.filter(product => !existsProductsIds.includes(product.id))
        if (checkInexistentProducts.length) {
            //Retorna todos produtos que não existem
            throw new AppError(`Could not find product ${checkInexistentProducts[0].id}.`, 404);
        }
        

        //Verifica a quantidade se é o suficiente
        const quantityAvailable = products.filter(
            product =>
                productExists.filter(p => p.id === product.id)[0].quantity <
                product.quantity,
        );
        
        if (quantityAvailable.length) {
            throw new AppError(
                `The quantity ${quantityAvailable[0].quantity}
               is not available for ${quantityAvailable[0].id}.`, 404);
        }

        //Retorna um array de produtos com o preco, quantidade e os produtos
        const serializedProducts = products.map(product => ({
            product_id: product.id,
            quantity: product.quantity,
            price: productExists.filter(p => p.id === product.id)[0].price,
            //total: productExists.filter(p => p.id === product.id)[0].price * product.quantity,
        }));
        console.log("Array com produtos e precos>>>>", serializedProducts)
        //Cria a minha ordem de pedido
        const order = await orderRepositorie.createOrder({
            customer: customerExists,
            products: serializedProducts,
        });
        console.log("Cria meu pedido>>>>", order)
        //Atualiza a quantidade de produto do estoque
        const { order_products } = order;

        const updatedProductQuantity = order_products.map(product => ({
            id: product.product_id,
            quantity:
                productExists.filter(p => p.id === product.product_id)[0].quantity - product.quantity,
        }));
        console.log("Atualiza estoque>>>>", updatedProductQuantity)
        await productRepositorie.save(updatedProductQuantity);

        return order;
    }

}

export default CreateOrderService;