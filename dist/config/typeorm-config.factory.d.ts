import { DataSourceOptions } from 'typeorm';
import { MongoConfig } from './config.interface';
export declare const convertMongoConfigToTypeormConfig: (config: MongoConfig) => DataSourceOptions;
