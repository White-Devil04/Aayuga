import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Loading from '../Components/Loading.jsx';
const ChatBot = lazy(()=>import('../Pages/ChatBot.jsx'));
const HomePage = lazy(()=>import('../Pages/HomePage.jsx'));
const Pose = lazy(()=>import('../Pages/Pose.jsx'));

const route = () => {
   return (
      <>
         <Navbar />
         <Suspense fallback={<Loading />}>
            <Router>
               <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/Pose' element={<Pose />} />
                  <Route path='/ChatBot' element={<ChatBot />} />
               </Routes>
            </Router>
         </Suspense>
      </>
   )
}

export default route
