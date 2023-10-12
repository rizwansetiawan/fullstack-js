import * as amqp from "amqplib"
import { cloudinaryConfig } from "../libs/cloudinary"
import {v2 as cloudinary} from "cloudinary"
import { AppDataSource } from "../data-source"
import Thread from "../entities/tbThread"
import "dotenv/config"
async function ProcessQueue() {

    try{
        const queueName = "thread-queued"
        const connection = await amqp.connect("amqp://127.0.0.1")
        const channel = await connection.createChannel()
        
        cloudinaryConfig()

        await channel.assertQueue(queueName)

        await channel.consume(queueName,async (message)=>{

            if(message !== null){
                try {
                    
                    const payload = JSON.parse(message.content.toString())
    
                    console.log("received message",payload)
                    console.log("received message",payload.image)
    
                    //save to database and upload ke cloudinary hehe
                    const cloudinaryResponse = await cloudinary.uploader.upload("./uploads/"+ payload.image)
                    
                    const thread = AppDataSource.getRepository(Thread).create({
                        
                        content:payload.content,
                        image:cloudinaryResponse.secure_url,
                        user:{
                            id:payload.user_id
                        }
                    })
                    //insert to database
                    const createThread = await AppDataSource.getRepository(Thread).save(thread)
                    console.log("thread is created")
                    channel.ack(message)
                } catch (error) {
                    console.log("Error processing queue",error)
                }
            }
        })
        
    }
    catch(error){
        console.log("Error processing queue",error)
    }
}
    AppDataSource.initialize().then(async()=>{
    ProcessQueue()
    }).catch((error) => console.log(error));