import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Loading from '../Components/Loading.jsx';
import Profile from '../Components/Profile.jsx';
const ChatBot = lazy(() => import('../pages/ChatBot.jsx'));
const HomePage = lazy(() => import('../Pages/HomePage.jsx'));
const Pose = lazy(() => import('../Pages/Pose.jsx'));
const Login = lazy(() => import('../Components/Login.jsx'));
const Signup = lazy(() => import('../Components/Signup.jsx'));

const route = () => {
   return (
      <>
         <Suspense fallback={<Loading />}>
            <Router>
               <Navbar />
               <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/Pose' element={<Pose />} />
                  <Route path='/ChatBot' element={<ChatBot />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/signup' element={<Signup />} />
                  <Route path='/profile' element={<Profile/>} />
               </Routes>
            </Router>
         </Suspense>
      </>
   )
}

export default route