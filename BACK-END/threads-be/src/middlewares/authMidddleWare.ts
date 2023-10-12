import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

const Authenticate = (
    req: Request,
    res: Response,
    next: NextFunction
):Response =>{
    const authorizationHeader = req.headers.authorization
    // console.log(authorizationHeader.startsWith("Bearer "))

    if(!authorizationHeader || !authorizationHeader.startsWith("Bearer ")){
        return res.status(401).json({ 
            Error:"Unauthorized"
         })
    }
    const token = authorizationHeader.split(" ")[1]
    try{
        const loginSession = jwt.verify(token,"bagianSecret")
        // console.log("ini bagian login session: " + loginSession)
        res.locals.loginSession = loginSession 
        next()
    }catch(error){
        return res.status(401).json(error)
    }
}
export default  Authenticate