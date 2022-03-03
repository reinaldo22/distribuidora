import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Admin1646340498227 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(new Table({
            name: 'admin',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'email',
                    type: 'varchar'
                },
                {
                    name: 'validated',
                    type: 'boolean',
                    default: false
                },
                {
                    name: 'password',
                    type: 'varchar'
                },
                {
                    name: "code",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "role",
                    type: "varchar"
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('admin')
    }

}
