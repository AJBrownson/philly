// middleware/verifyRolesMiddleware.ts

import { AuthRequest } from "./authMiddleware";

export const verifyRolesMiddleware = (roles) => (req, res, next) => {
    if (req.user && roles.includes(req.user.role)) {
        next();
    } else {
        res.status(401).json({ message: "Unauthorized"});
    }
};
