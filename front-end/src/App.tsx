import { Routes,Route, useNavigate,Navigate, Outlet } from "react-router-dom"
import IndexPage from "./pages/index"
import Register from "./pages/regsiter"
import Login from "./pages/login"
import RepliesPageDetails from "./pages/pageDetails"
import { useEffect, useState } from "react"
import { API, setAuthToken } from "./libs/API"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { rootState } from "./stores/types/rootState"
import { AUTH_CHECK, AUTH_ERROR } from "./stores/rootReducer"
import { IsLoading } from "./layout/loadingPage"

function App() {
  const [isLoading,setIsLoading] = useState<boolean>(true);
  const auth = useSelector((state:rootState)=>state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

async function authCheck(){
  try{
    setAuthToken(localStorage.token);
    const response = await API.get("/check")
    dispatch(AUTH_CHECK(response.data.user))
    setIsLoading(false);
  }catch(error){
    dispatch(AUTH_ERROR())
    setIsLoading(false);
    navigate("/login")
  }
}

  useEffect(()=>{
    if(localStorage.token){
    authCheck();
    }else{
      setIsLoading(false)
    }
  },[])

  function IsLogin (){
    if(!auth.email){
      return <Navigate to={'/login'}/>
    }else{
    return <Outlet/>}
  }
  function IsNotLogin (){
    if(auth.email){
      return <Navigate to={'/'}/>
    }else{
    return <Outlet/>}
  }
  return (
      <>
      {isLoading ? <IsLoading/> :(
     
    <Routes>
    <Route path="/loading" element={<IsLoading/>}/>
      <Route path="/" element={<IsLogin/>}>
       
        <Route path="/" element={<IndexPage/>}/>
        <Route path="/detail/:id" element={<RepliesPageDetails/>}/>
      </Route>

      <Route path="/" element={<IsNotLogin/>}>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Route>
        
    </Routes>
    
      )}
      </>
  )
}

export default App
 
