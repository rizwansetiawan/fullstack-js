import ThreadController from "../controller/threadController";
import * as express from "express";
import { Request,Response } from "express";
import authController from "../controller/authController";
import Authenticate from "../middlewares/authMidddleWare";
import {UploadImage} from "../middlewares/objectUpload";
import QueueController from "../controller/queueController";

const router = express.Router();

router.get("/",(req:Request,res:Response) => {
    res.send("hello world v1!")
})
router.get('/threads',Authenticate,ThreadController.find)
router.get('/thread/:id',ThreadController.findOne) 
router.post('/create_thread',Authenticate,UploadImage("image"),QueueController.enqueue) 
router.delete('/delete_thread/:id',ThreadController.delete)
router.patch('/update_thread/:id',ThreadController.update)
router.post('/register',authController.register)
router.post('/login',authController.login)
router.get('/logout',authController.logout)
router.get("/check",Authenticate,authController.check)

export default router;