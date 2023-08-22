import { Routes,Route, useNavigate } from "react-router-dom"
import IndexPage from "./pages/index"
import Register from "./pages/regsiter"
import Login from "./pages/login"
import RepliesPageDetails from "./pages/pageDetails"
import { useEffect, useState } from "react"
import { API, setAuthToken } from "./libs/API"
// import { useEffect } from "react"
// import { AUTH_CHECK } from "./stores/rootReducer"
function App() {
  const [isLoading,setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate()

async function authCheck(){
  try{
    setAuthToken(localStorage.token);
    const response = await API.get("/check")
    console.log("auth check successful",response)
    setIsLoading(false);
  }catch(error){
    localStorage.removeItem("token")
    navigate("/login")
    setIsLoading(false);
    console.log("auth check failed")
  }
}

  useEffect(()=>{
    authCheck();
  },[])


  return (
      <>
      {isLoading ? null :(
     
    <Routes>
      
      <Route path="/" element={<IndexPage/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/detail/:id" element={<RepliesPageDetails/>}/>
        
    </Routes>
      )}
      </>
  )
}

export default App
 
