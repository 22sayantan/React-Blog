import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Post from "./components/post/Post";
import SinglePost from "./components/singlePost/SinglePost";
import NavBar from "./components/navBar/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import LogOut from "./pages/logout/LogOut";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/write" element={<Write />} />
          <Route path="/single" element={<Single />} />
          <Route path="/post" element={<Post />} />
          <Route path="/singlepost" element={<SinglePost />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/logout" element={<LogOut/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
