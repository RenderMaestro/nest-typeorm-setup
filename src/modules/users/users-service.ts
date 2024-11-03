import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserSchema } from './users-schema'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserSchema)
    private userRepository: Repository<typeof UserSchema>,
  ) {}
  findUsers() {
    return 'working'
  }
}
