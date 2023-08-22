
export default interface iThreadCard {
    user?:iUser;
    image?:string;
    content?:string;
    posted?:string;
    likeButton?:string;
    repliesButton?:string;
}
export interface iUser{
    id:number;
    fullName?:string;
    userName?:string;
    profil_picture?:string;
    // email?:string;
    password?:string;
    
}
export interface iRegister{
    fullName?:string;
    userName?:string;
    email?:string;
    password?:string;
}

export interface iLogin{
    email?:string;
    password?:string;
}