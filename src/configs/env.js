import dotenv from 'dotenv';
dotenv.config();

export const env = {
    port: parseInt(process.env.PORT, 10) || 3500,
    db: {
        host: process.env.DB_HOST,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN,
    },
};