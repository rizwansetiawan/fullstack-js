import { Request,Response } from "express";
import authServices from "../services/authService";

class AuthController {
    register (req: Request, res: Response){
        authServices.register(req, res);
    }
    login(req:Request,res:Response){
        authServices.login(req, res);
    }
    check(req:Request,res:Response){
        authServices.check(req, res);
    }
    logout(req:Request,res:Response){
        authServices.logout(req, res);
    }
}
export default new AuthController()