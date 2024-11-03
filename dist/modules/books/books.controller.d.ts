import { BooksEntity } from './books.entity';
import { Repository } from 'typeorm';
export declare class BooksController {
    private repo;
    constructor(repo: Repository<typeof BooksEntity>);
    getBooks(): Promise<import("typeorm").EntitySchema<import("./books-type").Books>[]>;
    createBooks(body: string): Promise<import("typeorm").EntitySchema<import("./books-type").Books>[]>;
    update(id: string, body: any): string;
    remove(id: string): string;
    getbooks(): Promise<import("typeorm").EntitySchema<import("./books-type").Books>[]>;
    createbooks(createbooksdto: any): Promise<import("typeorm").EntitySchema<import("./books-type").Books>[]>;
}
