/**
 * The mongo connection configuration
 */
export type PostgresConfig = {
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
  username: string

  /**
   * Database password
   */
  password: string

  /**
   * Database name
   */
  database: string

  /**
   * Sets if we should trust the server certificate even though we cant verify it
   */
  trustServerCertificate: boolean
}
