import jwt from 'jsonwebtoken';
import { env } from '../configs/env.js';

export function generateToken(payload) {
    try {
        return jwt.sign(payload, env.jwt.secret, { expiresIn: env.jwt.expiresIn });
    } catch (error) {
        throw new Error('Error generating token: ' + error.message);
    }
}

export function verify(token) {
    return jwt.verify(token, env.jwt.secret, (error, decoded) => {
        if (error) {
            if (error.name === 'TokenExpiredError') {
                return { error: 'Token expired' };
            }
            if (error.name === 'JsonWebTokenError') {
                return { error: 'Invalid token' };
            }
        }
        return decoded;
    })
}
