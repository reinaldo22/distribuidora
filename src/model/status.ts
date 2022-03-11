import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('status')
class Status {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;
    

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export { Status };
