
import Home from "Pages/Home/Home";
import About from "Pages/About/About";
import Contact from "Pages/Contact/Contact";
import Login from "Pages/Login/Login";
import NotFound from "Pages/NotFound/NotFound";
import PostDescription from "Pages/PostDescription/PostDescription";
import Profile from "Pages/Profile/Profile";
import Search from "Pages/Search/Search";

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Context from 'Pages/Context/Context';
import { useContext } from 'react';


function PrivateRoute({ children }) {
  const { token } = useContext(Context);

  return token ? children : <Navigate to="/login" />;
}

const Paths = () => {
  return (
    <>
    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          {/* <Route path="/profile" element={<Profile/>}/> */}

          <Route path="profile" 
          element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
          } />  

          <Route path="/description/:idPost" element={<PostDescription/>}/>
          <Route path="/search/:word_search" element={<Search/>}/>

          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default Paths;