import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { BooksEntity } from './books.entity'
import { Repository } from 'typeorm'

@Controller('books')
export class BooksController {
  constructor(
    @InjectRepository(BooksEntity) private repo: Repository<typeof BooksEntity>,
  ) {}
  @Get()
  getBooks() {
    return this.getbooks()
  }
  @Post()
  createBooks(@Body('name') body: string) {
    return this.createbooks(body)
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return `this action updates ${id} books`
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `this action deletes ${id} books`
  }

  getbooks() {
    const books = this.repo.find()
    return books
  }
  createbooks(createbooksdto: any){
    const books = this.repo.create(createbooksdto)
    return this.repo.save(books)
  }
}
