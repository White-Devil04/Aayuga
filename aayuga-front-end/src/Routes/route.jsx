import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import ChatBot from '../Pages/ChatBot.jsx';
import HomePage from '../Pages/HomePage.jsx';
import Pose from '../Pages/Pose.jsx';

const route = () => {
   return (
      <>
         <Navbar />
         <Router>
            <Routes>
               <Route path='/' element={<HomePage />} />
               <Route path='/Pose' element={<Pose />} />
               <Route path='/ChatBot' element={<ChatBot />} />
            </Routes>
         </Router>
      </>
   )
}

export default route