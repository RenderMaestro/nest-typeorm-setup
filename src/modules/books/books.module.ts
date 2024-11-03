import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BooksController } from './books.controller'
import { BooksEntity } from './books.entity'


@Module({
  imports: [TypeOrmModule.forFeature([BooksEntity])],
  controllers: [BooksController],
  providers: [],
})
export class BooksModule {}