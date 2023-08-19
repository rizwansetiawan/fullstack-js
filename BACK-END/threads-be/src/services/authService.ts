import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Response,Request } from "express";
import { User } from "../entities/tbUser";
import { registerSchema,loginSchema } from "../utils/auth";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
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
        const encrypPassword = await bcrypt.hash(value.password,10)

        const checkEmail = await this.authRepository.count(
            {
                where: {
                    email: value.email,
                    userName: value.userName
                },
            })
            if(checkEmail >0){
                return res.status(400).json("email sudah di gunakan")
            }
            const user = this.authRepository.create({
                fullName: value.fullName,
                userName: value.userName,
                email: value.email,
                password: encrypPassword,
            });
            console.log(user)
            const setAccount =  await this.authRepository.save(user)
            return res.status(200).json(setAccount)

    }catch (error){
        return res.status(500).json("terjadi kesalahan pada server hehe");
    }
}

   //LOGIN  
   async login(req:Request,res:Response){
    try{
        const data = req.body;
        const {error,value} = loginSchema.validate(data);
        if (error) {
            return res.status(400).json({error: error});
        }
        const checkEmail = await this.authRepository.findOne({
            where: {email:value.email},
            select: ["id","fullName","userName","email","password"],
        })
        if (!checkEmail) {
            return res.status(400).json("email / password salah")
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
        expiresIn:"1hr",
    })
    return res.status(200).json({
        user,
        token,
    });
   }catch (err) {
    return res.status(500).json("server elor")
   }
}
async check(req:Request,res:Response){
    try{
        const loginSession = res.locals.loginSession;
        const user = await this.authRepository.findOne({
                where: {
                    id: loginSession.user.id,
                },
                select: ["id","fullName","userName","email","password"],
        })
        return res.status(200).json({
            user,
            message:"token is valid"
        });
    }catch(err) {
        return res.status(500).json("server error hehe")
    }
}
}
export default new AuthService();