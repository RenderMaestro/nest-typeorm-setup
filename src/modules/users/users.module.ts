import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersController } from './users-controller'
import { UserSchema } from './users-schema'
import { UsersService } from './users-service'

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
