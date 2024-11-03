import { EntitySchema } from 'typeorm'
import { BooksEntity } from './modules/books/books.entity'

export const AllBaseTypeormEntities: EntitySchema[] = [BooksEntity]
