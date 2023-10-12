import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Response,Request } from "express";
import { User } from "../entities/tbUser";
import { registerSchema,loginSchema } from "../utils/auth";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { NavLink } from "react-router-dom";
class AuthService {

private readonly authRepository: Repository<User> = AppDataSource.getRepository(User);

//REGISTER
    async register (req: Request, res: Response){
        try {
            const data = req.body
            const {error,value} = registerSchema.validate(data);
            if(error){
                return res.status(400).json({error: error});
        } 
        const encryptPassword = await bcrypt.hash(value.password,10)

        const checkEmail = await this.authRepository.count(
            {
                where: {
                    email: value.email,
                    userName: value.userName
                },
            })
            if(checkEmail > 0){
                return res.status(400).json("email sudah di gunakan !")
            }
            const userRegister = this.authRepository.create({
                fullName: value.fullName,
                userName: value.userName,
                email: value.email,
                password: encryptPassword,
            });
            console.log("registered account :",userRegister)
            const setAccount =  await this.authRepository.save(userRegister)
            return res.status(201).json(setAccount)

    }catch (error){
        return res.status(500).json("server error");
    }
}

   //LOGIN  
   async login(req:Request,res:Response){
    try{
        const data = req.body;
        const {error,value} = loginSchema.validate(data);
        if (error) {
            return res.status(401).json({error: error});
        }
        const checkEmail = await this.authRepository.findOne({
            where: {email:value.email},
            select: ["id","fullName","userName","email","password"],
        })
        if (!checkEmail) {
            return res.status(401).json("email / password salah")
        }
        const isPasswordValid = await bcrypt.compare(
            value.password,
            checkEmail.password
        );
        if(!isPasswordValid) {
            return res.status(400).json("email / password salah")
    }
    const user =  this.authRepository.create({
        id:checkEmail.id,
        email:checkEmail.email,
        password:checkEmail.password
    });
    const token = jwt.sign({user},"bagianSecret",{
        expiresIn:"24hr",
    })
    return res.status(201).json({
        user,
        token,
    });
   }catch (err) {
    return res.status(500).json("server error")
   }
}
    async check(req:Request,res:Response){
        try{
            const loginSession = res.locals.loginSession;
            const user = await this.authRepository.findOne({
                    where: {
                        id: loginSession.user.id,
                    },
                    select: ["id","fullName","userName","email","password","profil_picture"],
            })
            return res.status(200).json({
                user,
                message:"succesfully token is valid"
            });
        }catch(err) {
            return res.status(500).json("server error")
        }
    }
    async logout (req:Request,res:Response){
        try{
            console.log("logout berhasil")
            return res.status(200).json({message:"logout berhasil"})
        }catch(error){
            return res.status(400).json("logout tidak berhasil")
        }
    }
    }
    export default new AuthService();