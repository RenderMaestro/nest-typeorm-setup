import { BooksModule } from './modules/books/books.module'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { config } from 'dotenv'
import { LoggerModule } from 'nestjs-pino'
import { Config } from './config/config.interface'
import { ConfigModule } from './config/config.module'
import { convertMongoConfigToTypeormConfig } from './config/typeorm-config.factory'
import { BooksEntity } from './modules/books/books.entity'

config()

@Module({
  imports: [
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [Config],
      useFactory: (config: Config) => ({
        pinoHttp: {
          transport: { target: 'pino-pretty' },
          level: config.app.environment === 'development' ? 'trace' : 'error',
        },
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [Config],
      useFactory: (config: Config) => {
        return {
          ...convertMongoConfigToTypeormConfig(config.mongo),
          logging: config.app.environment === 'development' ? true : false,
          autoLoadEntities: true,
        }
      },
    }),
    BooksModule,
  ],
})
export class AppModule {}
