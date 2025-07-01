import { verify } from "../utils/jwt.js";

export function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.status(401).json({ error: "Access token missing" });

    const verification = verify(token);
    if (verification.error) {
        return res.status(403).json({ error: verification.error });
    }
    req.user = verification.id;
    next();
}