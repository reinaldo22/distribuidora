import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Orders from "./order";
import { Product } from "./product";

export type UserRoleType = "admin" | "customer";

@Entity('order_products')
class OrdersProducts {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @ManyToOne(() => Orders, order => order.order_products)
    @JoinColumn({ name: 'order_id' })
    order: Orders;

    @ManyToOne(() => Product, product => product.order_products)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @Column()
    order_id: string;
  
    @Column()
    product_id: string;

    @Column('decimal')
    price: number;

    @Column('int')
    quantity: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default OrdersProducts;

