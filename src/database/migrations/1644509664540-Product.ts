import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Product1644509664540 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(new Table({
            name: 'products',
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
                    name: 'price',
                    type: 'float'
                },
                {
                    name: 'quantity',
                    type: 'int'
                },
                {
                    name: 'image',
                    type: 'varchar'
                },
                {
                    name: 'categoryId',
                    type: 'integer'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                }
            ],
            foreignKeys: [
                {
                    name: "FKCategory",
                    referencedTableName: "category",
                    referencedColumnNames: ["id"],
                    columnNames: ["categoryId"],
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products')
    }

}
