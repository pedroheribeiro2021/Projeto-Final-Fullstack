import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1683221751048 implements MigrationInterface {
    name = 'InitialMigration1683221751048'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_2bf4aa41d384038daf10e39a8e8"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthday"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birthday" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "images" ALTER COLUMN "isCoverImage" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "images" ALTER COLUMN "isCoverImage" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_2bf4aa41d384038daf10e39a8e8" FOREIGN KEY ("announcementId") REFERENCES "announcement"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_2bf4aa41d384038daf10e39a8e8"`);
        await queryRunner.query(`ALTER TABLE "images" ALTER COLUMN "isCoverImage" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "images" ALTER COLUMN "isCoverImage" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthday"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birthday" character varying(8) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_2bf4aa41d384038daf10e39a8e8" FOREIGN KEY ("announcementId") REFERENCES "announcement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
