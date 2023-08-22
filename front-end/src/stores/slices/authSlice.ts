import { createSlice } from "@reduxjs/toolkit";
import { iUser } from "../../features/threads/components/ThreadCard";
import { setAuthToken } from "../../libs/API";

    export const initialAuthState :iUser = { 
        id:0,
        fullName:"",
        userName:"",
        // email:"",
    }
    export const authSlice = createSlice({
        name: "auth",
        initialState:initialAuthState,
        reducers:{
            AUTH_LOGIN:(_,action)=>{
            console.log("login berhasil hehe",action.payload);
            alert("berhasil login")
            localStorage.setItem("token",action.payload.token);
            setAuthToken(localStorage.token);
            },
            AUTH_CHECK:(state,action)=>{

            },
            AUTH_ERROR:(state)=>{

            },
            AUTH_LOGOUT:(state)=>{
            }
        }
    })
