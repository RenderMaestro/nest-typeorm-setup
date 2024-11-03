"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const typeorm_1 = require("typeorm");
const base_typeorm_entities_1 = require("./base-typeorm-entities");
const config_factory_1 = require("./config/config.factory");
const typeorm_config_factory_1 = require("./config/typeorm-config.factory");
exports.default = new typeorm_1.DataSource({
    ...(0, typeorm_config_factory_1.convertMongoConfigToTypeormConfig)((0, config_factory_1.makeMongoConfig)()),
    entities: base_typeorm_entities_1.AllBaseTypeormEntities,
});
//# sourceMappingURL=data-source.js.map