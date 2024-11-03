"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_nestjs_1 = require("@anatine/zod-nestjs");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const nestjs_pino_1 = require("nestjs-pino");
const os = require("os");
const app_module_1 = require("./app.module");
const config_interface_1 = require("./config/config.interface");
const auth_guard_1 = require("./guards/auth.guard");
process.on('unhandledRejection', (error) => {
    console.error('[ERROR]: unhandled promise rejection (should not occur)', error);
});
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        bufferLogs: true,
    });
    app.useLogger(app.get(nestjs_pino_1.Logger));
    const appConfig = app.get(config_interface_1.Config);
    app.useGlobalGuards(new auth_guard_1.AuthGuard());
    app.enableCors({
        origin: ['http://localhost:3000'],
    });
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('Payrup API - Flight Module')
        .addBearerAuth()
        .build();
    (0, zod_nestjs_1.patchNestjsSwagger)();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
        },
    });
    const ipAddress = getIpAddress();
    await app.listen(appConfig.app.port, ipAddress);
}
bootstrap();
function getIpAddress() {
    if (process.env.NODE_ENV !== 'production') {
        return '127.0.0.1';
    }
    const interfaces = Object.values(os.networkInterfaces());
    for (const _interface of interfaces) {
        if (!_interface)
            continue;
        for (const { family, internal, address } of _interface) {
            if ('IPv4' === family && !internal) {
                return address;
            }
        }
    }
    throw Error('Suitable IP address not found.');
}
//# sourceMappingURL=main.js.map