/**
 * The mongo connection configuration
 */
export type MongoConfig = {
  /**
   * Database host
   */
  host: string

  /**
   * Database port
   */
  port: number

  /**
   * Database username
   */
  user?: string

  /**
   * Database password=
   */
  password?: string

  /**
   * Database domain - if set the driver will automatically use NTLM domain login
   */
  domain?: string

  /**
   * Database name
   */
  database: string

  /**
   * Sets if we should trust the server certificate even though we cant verify it
   */
  trustServerCertificate: boolean

  /**
   * Database schema
   */
  schema?: string
}

/**
 * The node environment app should reflect
 */
export type AppEnv = 'development' | 'production'

/**
 * The application configuration
 */
export type AppConfig = {
  /**
   * The port the server should listen on
   */
  port: number
  /**
   * The node environment app should reflect
   */
  environment: AppEnv

}

export type Config = {
  mongo: MongoConfig
  app: AppConfig
}

/**
 * Symbol for NestJS resolving
 */
export const Config = Symbol('Config')
