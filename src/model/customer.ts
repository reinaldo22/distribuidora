import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserRoleType } from "./admin";


@Entity('customer')
class Customer {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    cpf: string;

    @Column()
    endereco: string;

    @Column()
    forma_pagamento: string;

    @Column()
    validated: boolean;

    @Column()
    code: string;

    @Column()
    password: string;

    @Column({
        type: "enum",
        enum: ["admin", "customer"],
        default: "customer"
    })
    role: UserRoleType;

    @CreateDateColumn()
    created_at: Date;
}

export default Customer;

