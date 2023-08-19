import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./tbUser";

@Entity({name: "follows"})
export class Follows {
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(()=>User,(users)=>users.follows)
    user:User;
}