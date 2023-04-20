import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1681997108888 implements MigrationInterface {
    name = 'InitialMigration1681997108888'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cep" character varying(8) NOT NULL, "state" character varying(2) NOT NULL, "city" character varying(50) NOT NULL, "street" character varying(100) NOT NULL, "number" character varying(5) NOT NULL, "complement" character varying(100), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "images" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "imageUrl" character varying NOT NULL, "isCoverImage" boolean NOT NULL, "announcementId" uuid, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "brands" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying(50) NOT NULL, CONSTRAINT "PK_b0c437120b624da1034a81fc561" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "models" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "model" character varying(100) NOT NULL, CONSTRAINT "PK_ef9ed7160ea69013636466bf2d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "years" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "year" character varying(4) NOT NULL, CONSTRAINT "PK_d6fe7de297533f142df4cb749ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "fuels" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fuel" character varying(3) NOT NULL, CONSTRAINT "PK_4e8a7eac61d58da2fbb4b8743e1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "announcement" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "mileage" integer NOT NULL, "color" character varying(50) NOT NULL, "FIPE_priceTable" integer NOT NULL, "price" integer NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "isSuperBuy" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "brandId" uuid, "modelId" uuid, "yearId" uuid, "fuelId" uuid, CONSTRAINT "PK_e0ef0550174fd1099a308fd18a0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(100) NOT NULL, "cpf" character varying(11) NOT NULL, "cellPhone" character varying(12) NOT NULL, "birthday" character varying(10) NOT NULL, "description" character varying(255), "is_advertiser" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "addressId" uuid, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "REL_bafb08f60d7857f4670c172a6e" UNIQUE ("addressId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(255) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "announcementId" uuid, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_fac6198a89ec23116ca0352104d" FOREIGN KEY ("announcementId") REFERENCES "announcement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD CONSTRAINT "FK_fd25dfe3da37df1715f11ba6ec8" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD CONSTRAINT "FK_93c7ed7fdd1ad11eff1214471c3" FOREIGN KEY ("brandId") REFERENCES "brands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD CONSTRAINT "FK_338dba18c0d48c660b1ce98ce75" FOREIGN KEY ("modelId") REFERENCES "models"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD CONSTRAINT "FK_f865a84ff8852eb762c261e989f" FOREIGN KEY ("yearId") REFERENCES "years"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD CONSTRAINT "FK_691de606953492ac88b5d8b5c80" FOREIGN KEY ("fuelId") REFERENCES "fuels"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_2bf4aa41d384038daf10e39a8e8" FOREIGN KEY ("announcementId") REFERENCES "announcement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_2bf4aa41d384038daf10e39a8e8"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea"`);
        await queryRunner.query(`ALTER TABLE "announcement" DROP CONSTRAINT "FK_691de606953492ac88b5d8b5c80"`);
        await queryRunner.query(`ALTER TABLE "announcement" DROP CONSTRAINT "FK_f865a84ff8852eb762c261e989f"`);
        await queryRunner.query(`ALTER TABLE "announcement" DROP CONSTRAINT "FK_338dba18c0d48c660b1ce98ce75"`);
        await queryRunner.query(`ALTER TABLE "announcement" DROP CONSTRAINT "FK_93c7ed7fdd1ad11eff1214471c3"`);
        await queryRunner.query(`ALTER TABLE "announcement" DROP CONSTRAINT "FK_fd25dfe3da37df1715f11ba6ec8"`);
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_fac6198a89ec23116ca0352104d"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "announcement"`);
        await queryRunner.query(`DROP TABLE "fuels"`);
        await queryRunner.query(`DROP TABLE "years"`);
        await queryRunner.query(`DROP TABLE "models"`);
        await queryRunner.query(`DROP TABLE "brands"`);
        await queryRunner.query(`DROP TABLE "images"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
