import { MigrationInterface, QueryRunner } from "typeorm";

export class editDescriptionr1677288428998 implements MigrationInterface {
    name = 'editDescriptionr1677288428998'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Movie" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "Movie" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Movie" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "Movie" ADD "description" text`);
    }

}
