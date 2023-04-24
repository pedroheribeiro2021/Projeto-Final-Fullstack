import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1682265570228 implements MigrationInterface {
    name = 'InitialMigration1682265570228'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" varchar PRIMARY KEY NOT NULL, "cep" varchar(8) NOT NULL, "state" varchar(2) NOT NULL, "city" varchar(50) NOT NULL, "street" varchar(100) NOT NULL, "number" varchar(5) NOT NULL, "complement" varchar(100))`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" varchar PRIMARY KEY NOT NULL, "description" varchar(255) NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "userId" varchar, "announcementId" varchar)`);
        await queryRunner.query(`CREATE TABLE "users" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(100) NOT NULL, "email" varchar(100) NOT NULL, "password" varchar(100) NOT NULL, "cpf" varchar(11) NOT NULL, "cellPhone" varchar(12) NOT NULL, "birthday" varchar(8) NOT NULL, "description" varchar(255), "is_advertiser" boolean NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "deletedAt" datetime, "addressId" varchar, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "REL_bafb08f60d7857f4670c172a6e" UNIQUE ("addressId"))`);
        await queryRunner.query(`CREATE TABLE "images" ("id" varchar PRIMARY KEY NOT NULL, "imageUrl" varchar NOT NULL, "isCoverImage" boolean NOT NULL, "announcementId" varchar)`);
        await queryRunner.query(`CREATE TABLE "brands" ("id" varchar PRIMARY KEY NOT NULL, "brand" varchar(50) NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "models" ("id" varchar PRIMARY KEY NOT NULL, "model" varchar(100) NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "years" ("id" varchar PRIMARY KEY NOT NULL, "year" varchar(4) NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "fuels" ("id" varchar PRIMARY KEY NOT NULL, "fuel" varchar(3) NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "announcement" ("id" varchar PRIMARY KEY NOT NULL, "mileage" integer NOT NULL, "color" varchar(50) NOT NULL, "FIPE_priceTable" integer NOT NULL, "price" integer NOT NULL, "isActive" boolean NOT NULL DEFAULT (1), "isSuperBuy" boolean NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "userId" varchar, "brandId" varchar, "modelId" varchar, "yearId" varchar, "fuelId" varchar)`);
        await queryRunner.query(`CREATE TABLE "temporary_comments" ("id" varchar PRIMARY KEY NOT NULL, "description" varchar(255) NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "userId" varchar, "announcementId" varchar, CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_2bf4aa41d384038daf10e39a8e8" FOREIGN KEY ("announcementId") REFERENCES "announcement" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_comments"("id", "description", "createdAt", "userId", "announcementId") SELECT "id", "description", "createdAt", "userId", "announcementId" FROM "comments"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`ALTER TABLE "temporary_comments" RENAME TO "comments"`);
        await queryRunner.query(`CREATE TABLE "temporary_users" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(100) NOT NULL, "email" varchar(100) NOT NULL, "password" varchar(100) NOT NULL, "cpf" varchar(11) NOT NULL, "cellPhone" varchar(12) NOT NULL, "birthday" varchar(8) NOT NULL, "description" varchar(255), "is_advertiser" boolean NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "deletedAt" datetime, "addressId" varchar, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "REL_bafb08f60d7857f4670c172a6e" UNIQUE ("addressId"), CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea" FOREIGN KEY ("addressId") REFERENCES "addresses" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_users"("id", "name", "email", "password", "cpf", "cellPhone", "birthday", "description", "is_advertiser", "createdAt", "updatedAt", "deletedAt", "addressId") SELECT "id", "name", "email", "password", "cpf", "cellPhone", "birthday", "description", "is_advertiser", "createdAt", "updatedAt", "deletedAt", "addressId" FROM "users"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`ALTER TABLE "temporary_users" RENAME TO "users"`);
        await queryRunner.query(`CREATE TABLE "temporary_images" ("id" varchar PRIMARY KEY NOT NULL, "imageUrl" varchar NOT NULL, "isCoverImage" boolean NOT NULL, "announcementId" varchar, CONSTRAINT "FK_fac6198a89ec23116ca0352104d" FOREIGN KEY ("announcementId") REFERENCES "announcement" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_images"("id", "imageUrl", "isCoverImage", "announcementId") SELECT "id", "imageUrl", "isCoverImage", "announcementId" FROM "images"`);
        await queryRunner.query(`DROP TABLE "images"`);
        await queryRunner.query(`ALTER TABLE "temporary_images" RENAME TO "images"`);
        await queryRunner.query(`CREATE TABLE "temporary_announcement" ("id" varchar PRIMARY KEY NOT NULL, "mileage" integer NOT NULL, "color" varchar(50) NOT NULL, "FIPE_priceTable" integer NOT NULL, "price" integer NOT NULL, "isActive" boolean NOT NULL DEFAULT (1), "isSuperBuy" boolean NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "userId" varchar, "brandId" varchar, "modelId" varchar, "yearId" varchar, "fuelId" varchar, CONSTRAINT "FK_fd25dfe3da37df1715f11ba6ec8" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_93c7ed7fdd1ad11eff1214471c3" FOREIGN KEY ("brandId") REFERENCES "brands" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_338dba18c0d48c660b1ce98ce75" FOREIGN KEY ("modelId") REFERENCES "models" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_f865a84ff8852eb762c261e989f" FOREIGN KEY ("yearId") REFERENCES "years" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_691de606953492ac88b5d8b5c80" FOREIGN KEY ("fuelId") REFERENCES "fuels" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_announcement"("id", "mileage", "color", "FIPE_priceTable", "price", "isActive", "isSuperBuy", "createdAt", "userId", "brandId", "modelId", "yearId", "fuelId") SELECT "id", "mileage", "color", "FIPE_priceTable", "price", "isActive", "isSuperBuy", "createdAt", "userId", "brandId", "modelId", "yearId", "fuelId" FROM "announcement"`);
        await queryRunner.query(`DROP TABLE "announcement"`);
        await queryRunner.query(`ALTER TABLE "temporary_announcement" RENAME TO "announcement"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" RENAME TO "temporary_announcement"`);
        await queryRunner.query(`CREATE TABLE "announcement" ("id" varchar PRIMARY KEY NOT NULL, "mileage" integer NOT NULL, "color" varchar(50) NOT NULL, "FIPE_priceTable" integer NOT NULL, "price" integer NOT NULL, "isActive" boolean NOT NULL DEFAULT (1), "isSuperBuy" boolean NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "userId" varchar, "brandId" varchar, "modelId" varchar, "yearId" varchar, "fuelId" varchar)`);
        await queryRunner.query(`INSERT INTO "announcement"("id", "mileage", "color", "FIPE_priceTable", "price", "isActive", "isSuperBuy", "createdAt", "userId", "brandId", "modelId", "yearId", "fuelId") SELECT "id", "mileage", "color", "FIPE_priceTable", "price", "isActive", "isSuperBuy", "createdAt", "userId", "brandId", "modelId", "yearId", "fuelId" FROM "temporary_announcement"`);
        await queryRunner.query(`DROP TABLE "temporary_announcement"`);
        await queryRunner.query(`ALTER TABLE "images" RENAME TO "temporary_images"`);
        await queryRunner.query(`CREATE TABLE "images" ("id" varchar PRIMARY KEY NOT NULL, "imageUrl" varchar NOT NULL, "isCoverImage" boolean NOT NULL, "announcementId" varchar)`);
        await queryRunner.query(`INSERT INTO "images"("id", "imageUrl", "isCoverImage", "announcementId") SELECT "id", "imageUrl", "isCoverImage", "announcementId" FROM "temporary_images"`);
        await queryRunner.query(`DROP TABLE "temporary_images"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME TO "temporary_users"`);
        await queryRunner.query(`CREATE TABLE "users" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(100) NOT NULL, "email" varchar(100) NOT NULL, "password" varchar(100) NOT NULL, "cpf" varchar(11) NOT NULL, "cellPhone" varchar(12) NOT NULL, "birthday" varchar(8) NOT NULL, "description" varchar(255), "is_advertiser" boolean NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "deletedAt" datetime, "addressId" varchar, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "REL_bafb08f60d7857f4670c172a6e" UNIQUE ("addressId"))`);
        await queryRunner.query(`INSERT INTO "users"("id", "name", "email", "password", "cpf", "cellPhone", "birthday", "description", "is_advertiser", "createdAt", "updatedAt", "deletedAt", "addressId") SELECT "id", "name", "email", "password", "cpf", "cellPhone", "birthday", "description", "is_advertiser", "createdAt", "updatedAt", "deletedAt", "addressId" FROM "temporary_users"`);
        await queryRunner.query(`DROP TABLE "temporary_users"`);
        await queryRunner.query(`ALTER TABLE "comments" RENAME TO "temporary_comments"`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" varchar PRIMARY KEY NOT NULL, "description" varchar(255) NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "userId" varchar, "announcementId" varchar)`);
        await queryRunner.query(`INSERT INTO "comments"("id", "description", "createdAt", "userId", "announcementId") SELECT "id", "description", "createdAt", "userId", "announcementId" FROM "temporary_comments"`);
        await queryRunner.query(`DROP TABLE "temporary_comments"`);
        await queryRunner.query(`DROP TABLE "announcement"`);
        await queryRunner.query(`DROP TABLE "fuels"`);
        await queryRunner.query(`DROP TABLE "years"`);
        await queryRunner.query(`DROP TABLE "models"`);
        await queryRunner.query(`DROP TABLE "brands"`);
        await queryRunner.query(`DROP TABLE "images"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
