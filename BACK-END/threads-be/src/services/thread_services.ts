import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import Thread from "../entities/tbThread";
import { Request,Response } from "express";


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
            return res.status(500).json({error:"error while get thread data"})
    }}
    async findOne(req:Request,res:Response):Promise<Response>{
        
        const id = parseInt(req.params.id)

        try{
            const thread = await this.threadRepository.findOne(
                
                {
                    where: {id:id},
                    relations : ['user']
                },
            )
            return res.status(200).json(thread);
        } catch(err){
            return res.status(500).json({error:"error while getting thread"})
    }}relations : ['user']

    // async create(req:Request,res:Response):Promise<Response>{
    //     const {content} = req.body;
    //     const loginSession = res.locals.loginSession
    //     try{
    //         const user = loginSession.user
    //         this.relations = ["user"]
    //         const threads = this.threadRepository.create({
    //             content,
    //             image:res.locals.filename,
    //             user:user
    //         })
    //         const saveThread = await this.threadRepository.save(threads)
    //             return res.status(201).json(saveThread)
    //         }catch(err){
    //             return res.status(500).json({error:"error while creating data thread"})
    //         }
    // }

    async delete(req:Request,res:Response):Promise<Response>{
        const id = parseInt(req.params.id)

        try{
            const thread = await this.threadRepository.findOne(
                {
                    where:{id:id}
                }
            )
            await this.threadRepository.remove(thread)
            return res.status(200).json("delete")
        } catch(err){
            return res.status(500).json({error:"error while delete data "})
    }}
    async update(req:Request,res:Response):Promise<Response>{
        const id = parseInt(req.params.id)
        const {content,image} = req.body;
        try{
            const thread = await this.threadRepository.findOne(
                {
                    where:{id:id}
                }
            )
            thread.content = content,
            thread.image = image
            
            const updateThread = this.threadRepository.save(thread)
            return res.status(201).json(updateThread)
        } catch(err){
            return res.status(500).json({error:"error while updating data "})
    }}
}
export default new ThreadService