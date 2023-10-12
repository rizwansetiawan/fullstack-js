import { FaImage } from 'react-icons/fa';
import {FcAddImage} from "react-icons/fc"
import UseHooks from '../hooks/useHooks';
import { Stack,Box,Avatar,Input,FormControl,Button,Text,FormLabel } from "@chakra-ui/react"
import { rootState } from '../stores/types/rootState';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { HttpStatusCode } from 'axios';
// import { IsLoading,Loadingfunc } from './loadingPage';
export default function ContentCardPost () {
  const {fecthCreatePost,handleImageChange,handleContentChange} = UseHooks();
  const auth = useSelector((state:rootState)=>state.auth) 
  
  const [IsLoading,setLoading] = useState(false)
  const navigateTo = useNavigate()
  
  const ClickMe = ()=>{
      setLoading(true)
      console.log("true ga sih",IsLoading)
      setTimeout(()=>{
        
        if(Object()){
          
      navigateTo("/")
        }
      },3000)
  }

    return (
        <>
    <Stack direction={'column'} spacing={0} mb={14} fontSize={'sm'} >
      <Text fontSize={"2xl"} mt={6} color={"cyan.600"} >Home</Text>
            <Box mt={"20px"} display={"flex"}>
            <Avatar src={auth.profil_picture} name="unknown user" display={"flex"}  />
            <form onSubmit={fecthCreatePost} encType='multipart/form-data' >
            
            <Input name='content' onChange={handleContentChange} type='text' w={"280px"} placeholder="what happen ..." border={"none"} ms={2} ></Input>
            <FormLabel display={'inline'} cursor={"pointer"} >
            <Input  name='image' onChange={handleImageChange} w={"390px"} type="file" placeholder="image" width={"1px"} bg={"transparent"} hidden color={"transparent"} border={"none"} display={"inline"}>
            </Input>
            <Button zIndex={-10} cursor={"pointer"} bg={"transparent"} > <FcAddImage cursor={"pointer"} color={"grey"} fontSize={28} /> </Button> 
            </FormLabel>
            {/* <Button bg={"cyan.400"} colorScheme='blue' ms={6} type="submit" color={"white"} display={"inline"} > post </Button> */}

            <Button onClick={ClickMe} bg={"cyan.400"} colorScheme='blue' ms={6} type="submit" color={"white"} display={"inline"} > {IsLoading ? <Navigate to="/loading"/> : "post" } </Button>

        {/* <button onClick={ClickMe} >click me</button> */}
            <FormControl id="image" display={"flex"}>
              <Box display={"flex"}>
             <FormLabel display={"flex"}> 
            {/* <Input  name='image' onChange={handleImageChange} w={"390px"} type="file" placeholder="image" width={"1px"} bg={"transparent"} hidden color={"transparent"} border={"none"} display={"inline"}>
            </Input> */}

            </FormLabel>
            
            </Box>
            </FormControl>

            
            </form>
            </Box>
            
          </Stack>
          </>
    )
}