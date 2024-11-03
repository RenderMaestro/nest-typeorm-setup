import 'dotenv/config'
import * as env from 'env-var'
import { AppConfig, AppEnv, Config, MongoConfig } from './config.interface'

export const JWT_SECRET = env.get('JWT_SECRET').required().asString()

/**
 * Make the mongo configuration from environment variables
 *
 * @return {MongoConfig} the mongo config
 */
export const makeMongoConfig = (): MongoConfig => {
  return {
    host: env.get('MONGO_SERVER').required().asString(),
    port: env.get('MONGO_PORT').default(1433).asInt(),
    // user: env.get('MONGO_USER').required().asString(),
    // password: env.get('MONGO_PASSWORD').required().asString(),
    domain: env.get('MONGO_DOMAIN').asString(),
    database: env.get('MONGO_DATABASE').required().asString(),
    schema: env.get('MONGO_SCHEMA').asString(),
    trustServerCertificate: env
      .get('MONGO_TRUST_SERVER_CERTIFICATE')
      .default('0')
      .asBool(),
  }
}

/**
 * Get the app environment setting
 *
 * @return {AppEnv} the app env setting
 */
export const makeAppEnvConfig = (): AppEnv => {
  return env
    .get('NODE_ENV')
    .default('production')
    .asEnum(['development', 'production'])
}

/**
 * Make the app configuration from environment variables
 *
 * @return {AppConfig} the app configuration
 */
export const makeAppConfig = (): AppConfig => {
  const environment = makeAppEnvConfig()
  return {
    port: env.get('PORT').default(8000).asPortNumber(),
    environment,
  }
}

/**
 * Make the whole configuration from environment variables
 *
 * @return {Config} the whole config
 */
export const makeConfig = (): Config => {
  return {
    mongo: makeMongoConfig(),
    app: makeAppConfig(),
  }
}
