import jwt, { JwtPayload } from "jsonwebtoken";
import express from 'express';

const SECRET_KEY = "my-library-secret";

export interface CustomRequest extends express.Request {
    token: string | JwtPayload;
}

export const authenticateTokenMiddleware = async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            throw new Error();
        }

        const decoded = jwt.verify(token, SECRET_KEY);
        (req as CustomRequest).token = decoded;
     
        next();

    } catch (err) {
        res.status(401).send('Please authenticate');
    }
}