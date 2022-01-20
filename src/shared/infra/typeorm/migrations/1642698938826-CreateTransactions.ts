import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateTransactions1642698938826 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transactions',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },

          {
            name: 'title',
            type: 'varchar'
          },

          {
            name: 'type',
            type: 'varchar'
          },

          {
            name: 'category',
            type: 'varchar'
          },

          {
            name: 'amount',
            type: 'float'
          },

          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()'
          },

          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()'
          },

          {
            name: 'deleted_at',
            type: 'timestamp with time zone',
            isNullable: true,
            default: null
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transactions')
  }
}
