"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeConfig = exports.makeAppConfig = exports.makeAppEnvConfig = exports.makeMongoConfig = exports.JWT_SECRET = void 0;
require("dotenv/config");
const env = require("env-var");
exports.JWT_SECRET = env.get('JWT_SECRET').required().asString();
const makeMongoConfig = () => {
    return {
        host: env.get('MONGO_SERVER').required().asString(),
        port: env.get('MONGO_PORT').default(1433).asInt(),
        domain: env.get('MONGO_DOMAIN').asString(),
        database: env.get('MONGO_DATABASE').required().asString(),
        schema: env.get('MONGO_SCHEMA').asString(),
        trustServerCertificate: env
            .get('MONGO_TRUST_SERVER_CERTIFICATE')
            .default('0')
            .asBool(),
    };
};
exports.makeMongoConfig = makeMongoConfig;
const makeAppEnvConfig = () => {
    return env
        .get('NODE_ENV')
        .default('production')
        .asEnum(['development', 'production']);
};
exports.makeAppEnvConfig = makeAppEnvConfig;
const makeAppConfig = () => {
    const environment = (0, exports.makeAppEnvConfig)();
    return {
        port: env.get('PORT').default(8000).asPortNumber(),
        environment,
    };
};
exports.makeAppConfig = makeAppConfig;
const makeConfig = () => {
    return {
        mongo: (0, exports.makeMongoConfig)(),
        app: (0, exports.makeAppConfig)(),
    };
};
exports.makeConfig = makeConfig;
//# sourceMappingURL=config.factory.js.map