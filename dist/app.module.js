"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const books_module_1 = require("./modules/books/books.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dotenv_1 = require("dotenv");
const nestjs_pino_1 = require("nestjs-pino");
const config_interface_1 = require("./config/config.interface");
const config_module_1 = require("./config/config.module");
const typeorm_config_factory_1 = require("./config/typeorm-config.factory");
(0, dotenv_1.config)();
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_pino_1.LoggerModule.forRootAsync({
                imports: [config_module_1.ConfigModule],
                inject: [config_interface_1.Config],
                useFactory: (config) => ({
                    pinoHttp: {
                        transport: { target: 'pino-pretty' },
                        level: config.app.environment === 'development' ? 'trace' : 'error',
                    },
                }),
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_module_1.ConfigModule],
                inject: [config_interface_1.Config],
                useFactory: (config) => {
                    return {
                        ...(0, typeorm_config_factory_1.convertMongoConfigToTypeormConfig)(config.mongo),
                        logging: config.app.environment === 'development' ? true : false,
                        autoLoadEntities: true,
                    };
                },
            }),
            books_module_1.BooksModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map