import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1614119104643 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Words",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "id_user",
                        type: "uuid"
                    },
                    {
                        name: "portugueseWord",
                        type: "varchar",

                    },
                    {
                        name: "englishWord",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUser",
                        referencedTableName: "Users",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_user"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"

                    }
                ]
            })


        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Words");
    }

}
