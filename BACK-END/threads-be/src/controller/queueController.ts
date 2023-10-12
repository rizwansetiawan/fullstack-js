import { Request, Response } from "express-serve-static-core";
import * as amqp from 'amqplib'
import { createThreadSchema } from "../utils/threads-validate";

class Queuecontroller{
    async enqueue(req:Request,res:Response){
        try{
            // const nameQueued = "threadQueued"
            const queueName = "thread-queued"
            const image = res.locals.filename
            const data = {
                content:req.body.content,
                image
                
            }
            const {error} = createThreadSchema.validate(data)
            if(error){
                return res.status(400).json({error:error})
            }

            const loginSession = res.locals.loginSession
            const payload = {
                content:data.content,
                image:data.image,
                user_id:loginSession.user.id,
            }

            const connection = await amqp.connect("amqp://127.0.0.1")

            const channel = await connection.createChannel()
            await channel.assertQueue(queueName)
            channel.sendToQueue(queueName,Buffer.from(JSON.stringify(payload)))

            await channel.close()
            await connection.close()

            res.status(200).json({message:"thread is queued ! ",
            data:payload
            })
        }catch(err){
            console.log("terjadi kesalahan ketika queued",err)
            res.status(500).json({error:err.message})
        }
    }
}
export default new Queuecontroller()