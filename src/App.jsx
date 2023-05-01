// import React from "react";

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
  // BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  
  return (
      <>
        <Topbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/register" element={<Login/>}/>
            <Route path="/register" element={<Setting/>}/>
            <Route path="/register" element={<Write/>}/>
            <Route path="/register" element={<Single/>}/>
            <Route path="/register" element={<Post/>}/>
            <Route path="/register" element={<SinglePost/>}/>
        </Routes>
      </>
  )
}

export default App
