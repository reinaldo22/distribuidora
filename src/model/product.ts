import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Category } from '../model/categories';
import OrdersProducts from "./orders_products";

@Entity('products')
class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @OneToMany(() => OrdersProducts, orders_products => orders_products.product)
    order_products: OrdersProducts[];

    @Column("decimal", { precision: 5, scale: 2 })
    price: number;

    @Column('int')
    quantity: number;

    @Column()
    image?: string;

    @JoinColumn({ name: "categoryId" })
    @ManyToOne(() => Category, category => category.id, { cascade: true })
    categoryId: Category;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export { Product }