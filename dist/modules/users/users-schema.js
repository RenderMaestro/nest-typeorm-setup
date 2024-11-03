"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const typeorm_1 = require("typeorm");
exports.UserSchema = new typeorm_1.EntitySchema({
    name: 'users',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        name: {
            type: String,
        },
    },
});
//# sourceMappingURL=users-schema.js.map