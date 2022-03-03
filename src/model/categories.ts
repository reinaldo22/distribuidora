import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('category')
class Category {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;
}

export { Category };