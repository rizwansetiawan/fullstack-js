import { Entity, ManyToOne, OneToMany } from "typeorm";
import { User } from "./tbUser";
import Thread from "./tbThread";

Entity({name: "replies"})
export class Replies {
    id:number;

    content:string;

    @ManyToOne(()=>User,(users)=>users.replies)
    user: User;

    @ManyToOne(()=>Thread,(threads)=>threads.replies)
    thread: Thread;

}