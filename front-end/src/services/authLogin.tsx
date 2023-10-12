import { ChangeEvent, useState } from "react";
// import {useNavigate } from "react-router-dom";
import { iLogin } from "../features/threads/components/ThreadCard";
import { API } from "../libs/API";
import { useDispatch } from "react-redux";
import { AUTH_LOGIN, AUTH_LOGOUT } from "../stores/rootReducer";
import { useNavigate } from "react-router-dom";
export default function AuthLogin(){


    const useNav = useNavigate()
    const dispatch = useDispatch()
    const [formData,setFormData] = useState<iLogin>({
        email:"",
        password:"",
    })
    const handleChange =(event:ChangeEvent<HTMLInputElement>) =>{
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

   async function handleLogin(){
        try{
            const response = await API.post("/login",formData)
            dispatch(AUTH_LOGIN(response.data))
            useNav("/")
        }catch(error){
            alert("email atau password salah CMIIW")
            console.log("gagal login euy",error)
        }
    }
    async function handleLogout(){
        try{
            const response = await API.post("/logout",formData)
            dispatch(AUTH_LOGOUT(response.data))
            alert("logout berhasil")
            useNav("/login")
        }catch(error){
            alert("logout gagal")
            console.log("gagal login euy",error)
        }
    }

return {handleChange,handleLogin,handleLogout}


}