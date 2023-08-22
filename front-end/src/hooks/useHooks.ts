import React, { useState,useEffect } from "react"
import { API, setAuthToken } from "../libs/API"
import { ThreadCards } from "../layout/centerCardcontent"
import { useParams } from "react-router-dom"
export default function UseHooks(){
    
    const [thread,setThread] = useState<ThreadCards[]>([])
  async function fetch(){
    const response = await API.get('/threads')
    setThread(response.data)
    console.log(response.data,'data user')
  }
  useEffect(() =>{
    fetch()
  },[])
// DETAILPAGE THREAD
const {id} = useParams();
  const [threadDetail,setThreadDetail] = useState<ThreadCards | null>(null);
  async function getThread(){
    try{
    const response = await API.get(`/threads/${id}`)
    setThreadDetail(response.data)
  }catch (error){
    console.log("data gagal di ambil",error)
  }
}
  useEffect(() =>{
    getThread()
  },[])

// POST
const [formData,setFormData] = useState(
  {
      content:"",
      image:""
  }
)
const [contentData,setContentData] = useState("")
const handleContentChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
const {value} = event.target
setContentData(value)
}

const [imageData,setImageData] = useState<string | Blob > ()

const handleImageChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
const file = event.target.files && event.target.files[0]
if(file){
  setImageData(file)
}
}
        

        
    const fecthCreatePost = async(event:React.FormEvent)=>{
        event.preventDefault();
        setAuthToken(localStorage.token)
        const formData = new FormData()
        formData.append("content",contentData)
        if(imageData !== null){
          formData.append("image",imageData as File)
        }else{
          formData.append("image",'')
        }
        try{
            const response = await API.post("/create",formData)
            fetch()
            console.log("create succes",response)
        }catch(error){
            console.log('error creating data',error)
        }
    }

    const handleChange = (event:React.ChangeEvent<HTMLInputElement> )=> {
        const {name,value} = event.target;
        console.log(name)
        setFormData((preveData)=>({
            ...preveData,
            [name]:value
        }))
    }


return {thread,setThread,formData,setFormData,fecthCreatePost,handleChange,threadDetail,imageData,handleContentChange,handleImageChange}
}