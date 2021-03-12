import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateImagesTable1607632294967 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name: 'id',
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated:true,
                    generationStrategy: "increment",
                },
                {
                    name: 'path',
                    type: "varchar",
                },
                {
                    name: 'createdAt',
                    type: "date"
                },
                {
                    name: 'posts_Id',
                    type: "integer",
                }
            ],
            foreignKeys: [
                {
                    name:"userImages",
                    columnNames:["posts_Id"],
                    referencedTableName: "posts",
                    referencedColumnNames:["id"],
                    onUpdate:"CASCADE",
                    onDelete:"CASCADE"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("images")
    }

}
