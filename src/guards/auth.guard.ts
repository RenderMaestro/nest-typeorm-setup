import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { JWT_SECRET } from '../config/config.factory'
import { verifyToken } from '../utils/verifyToken'

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest()
    const authHeader = request.headers['authorization']

    if (!authHeader) return false

    try {
      request.tokenPayload = await verifyToken(
        authHeader.split(' ')[1],
        JWT_SECRET,
      )
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  }
}
