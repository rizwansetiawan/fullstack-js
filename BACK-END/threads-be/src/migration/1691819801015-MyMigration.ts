import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1691819801015 implements MigrationInterface {
    name = 'MyMigration1691819801015'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "content" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "content"`);
    }

}
