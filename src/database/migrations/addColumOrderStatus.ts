import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class AddColumnOrderStatus1646591056745 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn(
            'orders',
            new TableColumn({
                name: 'status',
                type: 'integer',
                isNullable: true,
            }),
        );

        await queryRunner.createForeignKey(
            'orders',
            new TableForeignKey({
                name: 'fk_status',
                columnNames: ['status'],
                referencedTableName: 'status',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('orders', 'fk_status');
        await queryRunner.dropColumn('orders', 'status');
    }

}
