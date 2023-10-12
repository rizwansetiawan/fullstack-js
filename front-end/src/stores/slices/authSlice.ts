import { createSlice } from "@reduxjs/toolkit";
import { iUser } from "../../features/threads/components/ThreadCard";
import { setAuthToken } from "../../libs/API";
    export const initialAuthState :iUser = { 
        id:0,
        fullName:"",
        userName:"",
        profil_picture:"",
        email:"",
    }
    export const authSlice = createSlice({
        
        name: "auth",
        initialState:initialAuthState,
        reducers:{
            AUTH_LOGIN:(_,action)=>{
            const payload = action.payload
            console.log("login berhasil hehe",payload);
            alert("berhasil login")
            localStorage.setItem("token",payload.token);
            setAuthToken(localStorage.token);
            const user :iUser ={
                id:payload.user.id,
                fullName:payload.user.fullName,
                userName:payload.user.userName,
                email:payload.user.email,
                profil_picture:payload.user.profil_picture,
            }
            return user
            },
            AUTH_CHECK:(_,action)=>{
                const payload = action.payload
                return payload
            //     const user :iUser ={
            //         id:payload.user.id,
            //         fullName:payload.user.fullName,
            //         userName:payload.user.userName,
            //         email:payload.user.email,
            //         profil_picture:payload.user.profil_picture,
            // }
            // return user
            },
            AUTH_ERROR:(_)=>{
                localStorage.removeItem("token")
            },
            AUTH_LOGOUT:()=>{
                localStorage.removeItem("token")
                return initialAuthState
        }
    }})
