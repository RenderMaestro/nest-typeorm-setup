import { DataSourceOptions } from 'typeorm'
import { AllMigrations } from '../migrations'
import { MongoConfig } from './config.interface'

/**
 * Convert our config to be compatible with the typeorm configuration
 *
 * @param {MongoConfig} config our mongo config
 */
export const convertMongoConfigToTypeormConfig = (
  config: MongoConfig,
): DataSourceOptions => {
  return {
    type: 'mongodb',
    host: config.host,
    port: config.port,
    // url: 'mongodb://localhost:27017',
    useNewUrlParser: true,
    database: config.database,
    // username: config.user,
    // password: config.password,
    synchronize: false,
    migrationsRun: true,
    migrations: AllMigrations,
    extra: {
      trustServerCertificate: config.trustServerCertificate,
    },
  }
}
