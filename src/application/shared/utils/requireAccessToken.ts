import { NextFunction, Request, Response } from "express";
import * as jose from "jose";

type DecodedTokenType = {
    payload: {
        email: string,
        rol: string,
        exp: number
    },
    protectedHeader: {
        alg: string
    }
}

export const requireAccessToken = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return res.status(401).json({ message: "Missing JWT token" });
    }
    
    try {

        const secret = new TextEncoder().encode(process.env.JWT_SECRET);

        const { payload } = await jose.jwtVerify(authHeader, secret) as DecodedTokenType;

        req.headers.user = payload.email;
        req.headers.rol = payload.rol;
        
        return next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid JWT token" });
    }
};