import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export type UserRoleType = "admin" | "customer";

@Entity('admin')
class Admin {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    validated: boolean;

    @Column()
    code: string;

    @Column()
    password:string;

    @Column({
        type: "enum",
        enum: ["admin", "customer"],
        default: "admin"
    })
    role: UserRoleType;

    @CreateDateColumn()
    created_at: Date;
}

export default Admin;

