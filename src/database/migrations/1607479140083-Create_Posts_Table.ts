import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePostsTable1607479140083 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "posts",
            columns: [
                { 
                    name: 'id', 
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated:true,
                    generationStrategy: "increment",
                },
                { 
                    name: 'Content', 
                    type: 'text',
                },
                {
                    name: 'createdAt',
                    type: 'date',
                },
                {
                    name: 'user_Id',
                    type: 'varchar',
                }
            ],
            foreignKeys: [
                {
                    name:"userPosts",
                    columnNames:["user_Id"],
                    referencedTableName: "users",
                    referencedColumnNames:["id"],
                    onUpdate:"CASCADE",
                    onDelete:"CASCADE"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('posts')
    }

}
