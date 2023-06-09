import Home from "./pages/home/Home"
import Single from "./pages/single/Single"
import Topbar from "./components/topbar/topbar"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Setting from "./pages/settings/Settings"
import Write from "./pages/write/Write"
import Post from "./components/post/Post"
import SinglePost from "./components/singlePost/SinglePost"

import {
  BrowserRouter as Router, Routes,
  Route,
} from "react-router-dom";



function App() {
  
  return (
      <>
        <Topbar/>
        <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/setting" element={<Setting/>}/>
              <Route path="/write" element={<Write/>}/>
              <Route path="/single" element={<Single/>}/>
              <Route path="/post" element={<Post/>}/>
              <Route path="/singlepost" element={<SinglePost/>}/>
          </Routes>
        </Router>
      </>
  )
}

export default App
