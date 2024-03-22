import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar.jsx';
import About from '../pages/About.jsx';
import ChatBot from '../pages/ChatBot.jsx';
import HomePage from '../pages/HomePage.jsx';
import Login from '../pages/Login.jsx';
import Pose from '../pages/Pose.jsx';
import Signup from '../pages/Signup.jsx';

const route = () => {
   return (
      <>
         <Navbar/>
      <Router>
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/Pose' element={<Pose />} />
            <Route path='/ChatBot' element={<ChatBot />} />
            <Route path='/About' element={<About />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
         </Routes>
         </Router>
      </>
   )
}

export default route
