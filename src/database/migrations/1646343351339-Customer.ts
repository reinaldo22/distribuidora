import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Customer1646343351339 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(new Table({
            name: 'customer',
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
                    type: 'varchar',
                },
                {
                    name: 'cpf',
                    type: 'varchar'
                },
                {
                    name: 'email',
                    type: 'varchar'
                },
                {
                    name: 'password',
                    type: 'varchar'
                },
                {
                    name: 'endereco',
                    type: 'varchar'
                },
                {
                    name: "role",
                    type: "varchar"
                },
                {
                    name: 'forma-pagamento',
                    type: 'varchar',
                },
                {
                    name: "code",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: 'validated',
                    type: 'boolean',
                    default: false
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
        await queryRunner.dropTable('customer')
    }

}
