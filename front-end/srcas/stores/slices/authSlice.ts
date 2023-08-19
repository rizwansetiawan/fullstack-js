import { createSlice } from "@reduxjs/toolkit";
import { iUser } from "../../features/threads/components/ThreadCard";



    export const initialAuthState :iUser = { 
        id:0,
        fullName:"",
        userName:"",
        email:"",
        // password:"",
        // profil_picture:""
    }
    export const authSlice = createSlice({
        name: "auth",
        initialState:initialAuthState,
        reducers:{
            AUTH_LOGIN:(_,action)=>{
                const payload = action.payload
                console.log("YOUR DATA",payload)
                localStorage.setItem("token",payload.token)

            },
            AUTH_CHECK:(state,action)=>{

            },
            AUTH_ERROR:(state)=>{

            },
            AUTH_LOGOUT:(state)=>{

            }
        }
    })
