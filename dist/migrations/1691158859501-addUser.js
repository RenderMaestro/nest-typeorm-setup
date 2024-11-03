"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUser1691158859501 = void 0;
class AddUser1691158859501 {
    name = 'AddUser1691158859501';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.AddUser1691158859501 = AddUser1691158859501;
//# sourceMappingURL=1691158859501-addUser.js.map