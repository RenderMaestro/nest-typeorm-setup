import { EntitySchema } from 'typeorm'
import { Books } from './books-type'

export const BooksEntity = new EntitySchema<Books>({
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
})
