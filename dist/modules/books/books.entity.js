"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksEntity = void 0;
const typeorm_1 = require("typeorm");
exports.BooksEntity = new typeorm_1.EntitySchema({
    name: 'books',
    columns: {
        id: {
            type: Number,
            primary: true,
        },
        author: {
            type: String,
        },
        price: {
            type: String,
        },
    },
});
//# sourceMappingURL=books.entity.js.map