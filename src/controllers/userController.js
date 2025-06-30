import { createUser, getUserByIdService, loginUser, updateUserService } from "../services/userService.js";

export async function register(req, res, next) {
    try {
        const user = await createUser(req);
        res.status(201).json({ user });
    } catch (e) {
        next(e);
    }
}

export async function login(req, res, next) {
    try {
        const result = await loginUser(req);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
}

export async function getUserController(req, res, next) {
    try {
        const result = await getUserByIdService(req);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
}

export async function updateUserController(req, res, next) {
    try {
        const result = await updateUserService(req);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
}
