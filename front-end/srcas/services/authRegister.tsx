import { ChangeEvent, useState } from "react";
import {useNavigate } from "react-router-dom";
import { iRegister } from "../features/threads/components/ThreadCard";
import { API } from "../libs/API";

export default function AuthRegister(){

    const useNav = useNavigate()
    const [formData,setFormData] = useState<iRegister>({
        fullName: "",
        userName:"",
        email:"",
        password:"",
    })
    // console.log("variable pertama", formData)
    // console.log("variable kedua", setFormData)

    const handleChange =(event:ChangeEvent<HTMLInputElement>) =>{
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    function handleRegister(){
        try{
            const response = API.post("/register",formData)
            console.log("register berhasil hehe",response)
            useNav("/login")
        }catch(error){
            alert("character must > 3")
            console.log("gagal register euy",error)
        }
    }

return {handleChange,handleRegister}


}