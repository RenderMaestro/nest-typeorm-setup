import 'dotenv/config';
import { AppConfig, AppEnv, Config, MongoConfig } from './config.interface';
export declare const JWT_SECRET: string;
export declare const makeMongoConfig: () => MongoConfig;
export declare const makeAppEnvConfig: () => AppEnv;
export declare const makeAppConfig: () => AppConfig;
export declare const makeConfig: () => Config;
