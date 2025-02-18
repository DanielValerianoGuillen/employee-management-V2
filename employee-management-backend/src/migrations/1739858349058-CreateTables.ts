/*
import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1739858349058 implements MigrationInterface {
    name = 'CreateTables1739858349058'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "t_users" ("id" SERIAL NOT NULL, "first_name" character varying(255) NOT NULL, "last_name" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "role" character varying NOT NULL DEFAULT 'EMPLOYEE', CONSTRAINT "UQ_1b1275aba2e3044ce094936619c" UNIQUE ("email"), CONSTRAINT "PK_45e27b946b7f8cd527fd4fbe658" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "t_document_types" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, CONSTRAINT "PK_c4a89a2f99d8a5ef0ed34183654" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "t_employee_documents" ("id" SERIAL NOT NULL, "file_path" character varying(255) NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "documentTypeId" integer, "employeeId" integer, CONSTRAINT "PK_f24bade942ef955b13ebdfccd0c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "t_employees" ("id" SERIAL NOT NULL, "job_title" character varying(255) NOT NULL, "salary" numeric(10,2) NOT NULL, "userId" integer, CONSTRAINT "PK_aa4d122590b029017d031a26123" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "t_employee_documents" ADD CONSTRAINT "FK_2e8918dd75e7c408ac161a278e1" FOREIGN KEY ("documentTypeId") REFERENCES "t_document_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "t_employee_documents" ADD CONSTRAINT "FK_ec7117a27076968fffb55bc3cb6" FOREIGN KEY ("employeeId") REFERENCES "t_employees"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "t_employees" ADD CONSTRAINT "FK_efacb5c3936d42e5ba224fedca5" FOREIGN KEY ("userId") REFERENCES "t_users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "t_employees" DROP CONSTRAINT "FK_efacb5c3936d42e5ba224fedca5"`);
        await queryRunner.query(`ALTER TABLE "t_employee_documents" DROP CONSTRAINT "FK_ec7117a27076968fffb55bc3cb6"`);
        await queryRunner.query(`ALTER TABLE "t_employee_documents" DROP CONSTRAINT "FK_2e8918dd75e7c408ac161a278e1"`);
        await queryRunner.query(`DROP TABLE "t_employees"`);
        await queryRunner.query(`DROP TABLE "t_employee_documents"`);
        await queryRunner.query(`DROP TABLE "t_document_types"`);
        await queryRunner.query(`DROP TABLE "t_users"`);
    }

}
*/