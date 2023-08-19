import { useState } from "react";
import { iRegister } from "../features/threads/components/ThreadCard";
import { API } from "../libs/API";

export default function UseRegister(){
    const [formData,setFormData] = useState<iRegister>({
        email: "",
        userName: "",
        fullName: "",
        password: "",
    })
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = event.target;
        console.log(name);
        setFormData((prevData)=>({
            ...prevData,
            [name]: value
        }))
    }
    async function handleRegister(){
        try{
            const response = await API.post('/register',formData);
            
        }catch(error){
            console.log(error);
        }
    }
    return {handleChange, handleRegister,formData,setFormData}




}