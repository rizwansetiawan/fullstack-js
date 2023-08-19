import { BrowserRouter,Routes,Route } from "react-router-dom"
import IndexPage from "./pages/index"
import Register from "./pages/regsiter"
import Login from "./pages/login"
import RepliesPageDetails from "./pages/pageDetails"
function App() {

  return (
      <>
      <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<IndexPage/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/detail/:id" element={<RepliesPageDetails/>}/>
        
    </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
