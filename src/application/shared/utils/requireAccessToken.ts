import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

type DecodedTokenType = {
    email: string,
    rol: string,
    iat: number,
    exp: number,
}

export const requireAccessToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return res.status(401).json({ message: "Missing JWT token" });
    }
    
    try {
        const { user } = req.body;

        const decoded = verify(authHeader, "MT-SECRET") as DecodedTokenType;
        
        if(decoded.rol === "directivo") {
            return next();
        } else if(user === decoded.email) {
            return next();
        }
        return res.status(401).json({ message: "Invalid JWT token" });
    } catch (error) {
        return res.status(401).json({ message: "Invalid JWT token" });
    }
};