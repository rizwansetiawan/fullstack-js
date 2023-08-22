import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import Thread from "../entities/tbThread";
import { Request,Response } from "express";
import { createThreadSchema } from "../utils/threads-validate";

class ThreadService{
    
    private readonly threadRepository : Repository<Thread> =
    AppDataSource.getRepository(Thread);  

    async find(req:Request,res:Response):Promise<Response>{
        try{
            const thread = await this.threadRepository.find(
                {
                    relations: ["user"]
                }
            )
            return res.status(200).json(thread);
        } catch(err){
            return res.status(500).json({error:"error while getting thread coba lagi"})
    }}
    async findOne(req:Request,res:Response):Promise<Response>{
    
        let findParams = req.params.id
        const id =parseInt(findParams)

        try{
            const thread = await this.threadRepository.findOne(
                
                {
                    where: {id},
                    relations : ['user']
                },
            )
            return res.status(200).json(thread);
        } catch(err){
            return res.status(500).json({error:"error while getting thread"})
    }}relations : ['user']

    async create(req:Request,res:Response):Promise<Response>{
        const {content,image} = req.body;
        try{
            this.relations = ["user"]
            const threads = await this.threadRepository.create({
                content,
                image:res.locals.filename,
            }
            )

            const saveThread = await this.threadRepository.save(threads)
                return res.status(200).json(saveThread)
        }catch(err){
            return res.status(500).json({error:"error"})
        }
    }

    async delete(req:Request,res:Response):Promise<Response>{
        const id = parseInt(req.params.id)

        try{
            const thread = await this.threadRepository.findOne(
                {
                    where:{
                        id:id
                    },

                }
            )
            await this.threadRepository.remove(thread)
            return res.status(200).json("delete")
        } catch(err){
            return res.status(500).json({error:"error while create data "})
    }}
    async update(req:Request,res:Response):Promise<Response>{
        const id = parseInt(req.params.id)

        try{
            const thread = await this.threadRepository.findOne(
                {
                    where:{
                        id:id
                    },
                }
            )
            await this.threadRepository.remove(thread)
            return res.status(200).json("delete")
        } catch(err){
            return res.status(500).json({error:"error while create data "})
    }}
    

}
export default new ThreadService