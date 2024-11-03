export type MongoConfig = {
    host: string;
    port: number;
    user?: string;
    password?: string;
    domain?: string;
    database: string;
    trustServerCertificate: boolean;
    schema?: string;
};
export type AppEnv = 'development' | 'production';
export type AppConfig = {
    port: number;
    environment: AppEnv;
};
export type Config = {
    mongo: MongoConfig;
    app: AppConfig;
};
export declare const Config: unique symbol;
