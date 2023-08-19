import { useState,useEffect } from "react"
import { API } from "../libs/API"
import { ThreadCards } from "../layout/centerCardcontent"
import { useParams } from "react-router-dom"
export default function UseHooks(){
    
    const [thread,setThread] = useState<ThreadCards[]>([])
  async function fetch(){
    const response = await API.get('/threads',{
      headers : {
        Authorization:`Bearer ${localStorage.token}`
      }
    })
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
    const fecthCreatePost = async(event:React.FormEvent)=>{
        event.preventDefault();
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


return {thread,setThread,formData,setFormData,fecthCreatePost,handleChange,threadDetail}
}