import prisma from "../../prisma/client.js";
import { hashPassword, verifyPassword } from "../utils/crypto.js";
import { generateToken } from "../utils/jwt.js";

export async function createUser(req) {
    const payload = req.body;
    if (!payload?.email || !payload?.password || !payload?.mobile || !payload?.firstName || !payload?.lastName) {
        const error = new Error("Missing required fields");
        error.statusCode = 400;
        throw error;
    }
    const hashed = await hashPassword(payload.password);
    payload.password = hashed;
    const user = await prisma.user.create({ data: payload, omit: { password: true } });
    return user;
}

export async function loginUser(req) {
    const payload = req.body;
    if (!payload?.email || !payload?.password) {
        const error = new Error("Email and password are required");
        error.statusCode = 400;
        throw error;
    }
    const user = await prisma.user.findUnique({ where: { email: payload.email } });
    if (!user) {
        const error = new Error("user not found");
        error.statusCode = 404;
        throw error;
    }
    const isMatch = await verifyPassword(payload.password, user.password);
    if (!isMatch) {
        const error = new Error("Invalid credentials");
        error.statusCode = 401;
        throw error;
    }
    const token = generateToken({ id: user.id, email: user.email, createdAt: user.createdAt });
    return { user: { id: user.id, userName: user.firstName + " " + user.lastName }, token };
}

export async function getUserByIdService(req) {
    const userId = req.user;
    if (!userId) {
        const error = new Error("User ID is required");
        error.statusCode = 400;
        throw error;
    }
    const user = await prisma.user.findUnique({ where: { id: userId }, omit: { password: true } });
    if (!user) {
        const error = new Error("user not found");
        error.statusCode = 404;
        throw error;
    }
    return { user };
}

export async function updateUserService(req) {
    const payload = req.body;
    let { password, ...updatedData } = payload;
    const userId = req.user;
    const user = await prisma.user.update({ where: { id: userId }, data: updatedData, omit: { password: true } });
    if (!user) {
        const error = new Error("user not found");
        error.statusCode = 404;
        throw error;
    }
    return { user };
}