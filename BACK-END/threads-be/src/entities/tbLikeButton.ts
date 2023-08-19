import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./tbUser";
import Thread from "./tbThread";

@Entity ({name: "likes"})
export class Like{
    @PrimaryGeneratedColumn()
    id:number;

    @Column('boolean',{default:false})
    isLike:boolean = false;

    @ManyToOne(()=>User,(user)=>user.like)
    user:User;

    @ManyToOne(()=>Thread,(thread)=>thread.like)
    thread:Thread;

}