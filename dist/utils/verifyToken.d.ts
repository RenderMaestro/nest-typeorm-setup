import * as jwt from 'jsonwebtoken';
import { Token } from '../types/Token';
export declare const verifyToken: (token: string, secret: jwt.Secret, options?: jwt.VerifyOptions) => Promise<Token>;
