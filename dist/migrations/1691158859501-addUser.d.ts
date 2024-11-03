import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddUser1691158859501 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
