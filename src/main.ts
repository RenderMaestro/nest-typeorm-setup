import { patchNestjsSwagger } from '@anatine/zod-nestjs'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { Logger } from 'nestjs-pino'
import * as os from 'os'
import { AppModule } from './app.module'
import { Config } from './config/config.interface'
import { AuthGuard } from './guards/auth.guard'

process.on('unhandledRejection', (error) => {
  console.error(
    '[ERROR]: unhandled promise rejection (should not occur)',
    error,
  )
})

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  })

  app.useLogger(app.get(Logger))

  const appConfig = app.get<Config>(Config)

  app.useGlobalGuards(new AuthGuard())
  // To be added later
  app.enableCors({
    origin: ['http://localhost:3000'],
  })

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Payrup API - Flight Module')
    .addBearerAuth()
    .build()

  patchNestjsSwagger()

  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  })

  const ipAddress = getIpAddress()

  await app.listen(appConfig.app.port, ipAddress)
}

bootstrap()

function getIpAddress() {
  if (process.env.NODE_ENV !== 'production') {
    return '127.0.0.1'
  }

  const interfaces = Object.values(os.networkInterfaces())

  for (const _interface of interfaces) {
    if (!_interface) continue

    for (const { family, internal, address } of _interface) {
      if ('IPv4' === family && !internal) {
        return address
      }
    }
  }

  throw Error('Suitable IP address not found.')
}
