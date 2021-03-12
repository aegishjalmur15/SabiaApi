import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1607300514265 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'password',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'userImage',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'banner',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name:'about',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'createdAt',
                    type: 'date',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
