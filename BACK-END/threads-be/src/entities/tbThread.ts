import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./tbUser";
// import { Like } from "./tbLikeButton";
// import { Replies } from "./tbRepliesButton";

@Entity({name:"threads"})
export default class Thread {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    content:string;

    @Column({nullable:true})
    image:string;
    
    @Column({type: "timestamp",default:()=>"CURRENT_TIMESTAMP"})
    posted:Date

    @ManyToOne(()=> User,(user)=>user.threads) 
    user:User; 

    // @OneToMany(()=>Like,(likes)=>likes.thread)
    // like:Like[]

    // @OneToMany(()=>Replies,(replies)=>replies.thread)
    // replies:Replies[]
}