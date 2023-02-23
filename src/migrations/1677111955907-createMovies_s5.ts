import { MigrationInterface, QueryRunner } from "typeorm";

export class createMoviesS51677111955907 implements MigrationInterface {
    name = 'createMoviesS51677111955907'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movies_s5" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "description" text, "duration" integer NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_d5ea88e8a08ffee1b40854de4d7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "movies_s5"`);
    }

}
