import 'dotenv/config'
import { DataSource } from 'typeorm'
import { AllBaseTypeormEntities } from './base-typeorm-entities'
import { makeMongoConfig } from './config/config.factory'
import { convertMongoConfigToTypeormConfig } from './config/typeorm-config.factory'

export default new DataSource({
  ...convertMongoConfigToTypeormConfig(makeMongoConfig()),
  entities: AllBaseTypeormEntities,
})
