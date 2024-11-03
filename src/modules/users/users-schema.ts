import { EntitySchema } from 'typeorm'

export const UserSchema = new EntitySchema({
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
})
