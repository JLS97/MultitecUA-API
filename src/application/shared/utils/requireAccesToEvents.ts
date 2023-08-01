import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

type DecodedTokenType = {
    email: string,
    rol: string,
    userId: string,
    iat: number,
    exp: number,
}

export const requireAccessToEvents = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return res.status(401).json({ message: "Missing JWT token" });
    }
    
    try {
        const decoded = verify(authHeader, "MT-SECRET") as DecodedTokenType;

        if(decoded.rol === 'directivo' || decoded.rol === 'miembro') {
            req.headers.user = decoded.email;
            req.headers.userId = decoded.userId;
            req.headers.rol = decoded.rol;
            
            return next();
        }
        
        return res.status(401).json({ message: "JWT not allowed" });
    } catch (error) {
        return res.status(401).json({ message: "Invalid JWT token" });
    }
};