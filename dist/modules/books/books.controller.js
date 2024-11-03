"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const books_entity_1 = require("./books.entity");
const typeorm_2 = require("typeorm");
let BooksController = class BooksController {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    getBooks() {
        return this.getbooks();
    }
    createBooks(body) {
        return this.createbooks(body);
    }
    update(id, body) {
        return `this action updates ${id} books`;
    }
    remove(id) {
        return `this action deletes ${id} books`;
    }
    getbooks() {
        const books = this.repo.find();
        return books;
    }
    createbooks(createbooksdto) {
        const books = this.repo.create(createbooksdto);
        return this.repo.save(books);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "getBooks", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "createBooks", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "remove", null);
BooksController = __decorate([
    (0, common_1.Controller)('books'),
    __param(0, (0, typeorm_1.InjectRepository)(books_entity_1.BooksEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BooksController);
exports.BooksController = BooksController;
//# sourceMappingURL=books.controller.js.map