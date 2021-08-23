import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaSync1629686997662 implements MigrationInterface {
    name = 'SchemaSync1629686997662'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."coffee" RENAME COLUMN "name" TO "perraco"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."coffee" RENAME COLUMN "perraco" TO "name"`);
    }

}
