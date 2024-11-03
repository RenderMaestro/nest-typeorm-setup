import * as jwt from 'jsonwebtoken'
import { promisify } from 'util'
import { Token } from '../types/Token'

export const verifyToken = (
  token: string,
  secret: jwt.Secret,
  options?: jwt.VerifyOptions,
) => {
  return promisify<string, jwt.Secret, jwt.VerifyOptions, Token>(jwt.verify)(
    token,
    secret,
    options as jwt.VerifyOptions,
  )
}
