import ThreadController from "../controller/threadController";
import * as express from "express";
import { Request,Response } from "express";
import authController from "../controller/authController";
import Authenticate from "../middlewares/authMidddleWare";
import {UploadImage} from "../middlewares/objectUpload";
const router = express.Router();

router.get("/",(req:Request,res:Response) => {
    res.send("hello world v1!")
})
router.get('/threads',Authenticate,ThreadController.find)
router.get('/threads/:id',ThreadController.findOne) 
router.post('/create',Authenticate,UploadImage("image"),ThreadController.create) 
router.get('/delete/:id',ThreadController.delete)
router.patch('/update/:id',ThreadController.update)
router.post('/register',authController.register)
router.post('/login',authController.login)
router.get("/check",Authenticate,authController.check)

export default router;