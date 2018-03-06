import {MigrationInterface, QueryRunner} from "typeorm";

export class intialDatabase1520366334420 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user_session" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "token" character varying NOT NULL, "expiresAt" TIMESTAMP NOT NULL, "ip" character varying, "userAgent" character varying, "userId" integer, PRIMARY KEY("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "passwordResetToken" character varying DEFAULT 'null', "email" character varying NOT NULL, "password" character varying, CONSTRAINT "uk_user_email" UNIQUE ("email"), PRIMARY KEY("id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "type" character varying NOT NULL, CONSTRAINT "uk_role_type" UNIQUE ("type"), PRIMARY KEY("id"))`);
        await queryRunner.query(`CREATE TABLE "user_has_role" ("userId" integer NOT NULL, "roleId" integer NOT NULL, PRIMARY KEY("userId", "roleId"))`);
        await queryRunner.query(`ALTER TABLE "user_session" ADD CONSTRAINT "fk_e4fce720bb7c0d0214778a51d26" FOREIGN KEY ("userId") REFERENCES "user"("id")`);
        await queryRunner.query(`ALTER TABLE "user_has_role" ADD CONSTRAINT "fk_01fbcd453f4fb9739ed78830b98" FOREIGN KEY ("userId") REFERENCES "user"("id")`);
        await queryRunner.query(`ALTER TABLE "user_has_role" ADD CONSTRAINT "fk_a4dc6cbf573264cfb8ed0a1337f" FOREIGN KEY ("roleId") REFERENCES "role"("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user_has_role" DROP CONSTRAINT "fk_a4dc6cbf573264cfb8ed0a1337f"`);
        await queryRunner.query(`ALTER TABLE "user_has_role" DROP CONSTRAINT "fk_01fbcd453f4fb9739ed78830b98"`);
        await queryRunner.query(`ALTER TABLE "user_session" DROP CONSTRAINT "fk_e4fce720bb7c0d0214778a51d26"`);
        await queryRunner.query(`DROP TABLE "user_has_role"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "user_session"`);
    }

}
