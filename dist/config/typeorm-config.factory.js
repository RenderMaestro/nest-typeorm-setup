"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMongoConfigToTypeormConfig = void 0;
const migrations_1 = require("../migrations");
const convertMongoConfigToTypeormConfig = (config) => {
    return {
        type: 'mongodb',
        host: config.host,
        port: config.port,
        useNewUrlParser: true,
        database: config.database,
        synchronize: false,
        migrationsRun: true,
        migrations: migrations_1.AllMigrations,
        extra: {
            trustServerCertificate: config.trustServerCertificate,
        },
    };
};
exports.convertMongoConfigToTypeormConfig = convertMongoConfigToTypeormConfig;
//# sourceMappingURL=typeorm-config.factory.js.map