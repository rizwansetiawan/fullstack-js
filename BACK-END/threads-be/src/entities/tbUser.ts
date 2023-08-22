import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Thread from "./tbThread";
// import { Like } from "./tbLikeButton";
// import { Replies } from "./tbRepliesButton";
// import { Follows } from "./tbFollows";

@Entity({name:"user"})
export class User {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false})
    fullName:string;

    @Column()
    userName:string;

    @Column({nullable:true})
    profil_picture:string;

    @Column({nullable:true})
    profil_description:string;

    @Column()
    email:string;
    
    @Column({select:false})
    password:string;
    
    @OneToMany(()=> Thread,(thread)=>thread.user)
    threads:Thread[];
    // like:Like[];
    // replies:Replies[];
    // follows:Follows[];

    // @OneToMany(()=>Like,(likes)=>likes.user)
    // like:Like[];

    // @OneToMany(()=>Replies,(replies)=>replies.user)
    // replies:Replies[];

}