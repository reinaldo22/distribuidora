import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Customer from "./customer";
import OrdersProducts from "./orders_products";
import { Status } from "./status";

export type UserRoleType = "admin" | "customer";

@Entity('orders')
class Orders {

    @PrimaryGeneratedColumn('uuid')
    id: number;


    @ManyToOne(() => Customer)
    @JoinColumn({ name: "customer_id" })
    customer: Customer;

    @JoinColumn({ name: "status" })
    @ManyToOne(() => Status, status => status.id, { cascade: true })
    status: Status;

    @OneToMany(() => OrdersProducts, orders_products => orders_products.order, { cascade: true })
    order_products: OrdersProducts[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Orders;

