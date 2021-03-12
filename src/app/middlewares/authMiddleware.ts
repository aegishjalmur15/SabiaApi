import {  NextFunction, Request ,Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
interface TokenPayLoad{
    id: number,
    iat: number,
    exp: number,
}

export default function authMiddleware( req: Request, res: Response, next: NextFunction){
    const { authorization } = req.headers;

    if(!authorization){
        return res.sendStatus(401)
    }

    const token = authorization.replace('Bearer', '').trim();

    const key = process.env.HASH_KEY
    try{ 
        const data = jwt.verify(token, key);
        const { id } = data as TokenPayLoad

        req.userId = id
        return next()
    }catch(err){
        return res.sendStatus(401)
    }

}