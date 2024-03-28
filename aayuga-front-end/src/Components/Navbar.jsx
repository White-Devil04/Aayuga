import React, { useState, useEffect } from 'react';
import logo from '../utils/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
   const location = useLocation();
   console.log(location);
   const navigate = useNavigate();
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [username, setUsername] = useState('');
   const [user, setUser] = useState();
   const [isHomePage, setIsHomePage] = useState(true);
   useEffect(() => {
      if (location.pathname != '/') {
         setIsHomePage(false);
      }
      else {
         setIsHomePage(true);
      }
   }, [location]);

   useEffect(() => {
      const checkLoginStatus = async () => {
         try {
            const token = document.cookie.split('; ').find(row => row.startsWith('Token='));
            if (token) {
               const tokenValue = token.split('=')[1];
               const response = await axios.get('/api/user/profile', {
                  headers: {
                     Authorization: `Bearer ${tokenValue}`
                  }
               });
               setUser(response.data.user);
               setUsername(response.data.user.username);
               setIsLoggedIn(true);
            }
         } catch (error) {
            console.error('Error checking login status:', error);
         }
      };

      checkLoginStatus();
   }, []);

   const homeScroll = () => {
      document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
   };

   const aboutScroll = () => {
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
   };

   const servicesScroll = () => {
      document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
   };

   const contactScroll = () => {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
   };

   const handleHome = () => {
      navigate('/');
   };

   const handleLogin = () => {
      navigate('/login');
   };

   const handleProfile = () => {
      navigate('/profile');
   }

   return (
      <div id="navbar" className='fixed top-0 w-full flex content-between justify-between items-center bg-[#22c9ef] z-50'>
         <div className="flex items-center m-2">
            <img src={logo} alt="Aayuga" height='50px' width='50px' className='ml-12 mr-3' />
            <button onClick={handleHome} className='mx-2 text-3xl font-black'>Aayuga</button>
         </div>
         <div className='flex items-center m-2'>
            <ul className='flex items-center mr-12'>
               {(isHomePage) ? <>
                  <button className='mx-4 text-xl font-semibold' onClick={homeScroll}>Home</button>
                  <button className='mx-4 text-xl font-semibold' onClick={aboutScroll}>About</button>
                  <button className='mx-4 text-xl font-semibold' onClick={servicesScroll}>Services</button>
                  <button className='mx-4 text-xl font-semibold' onClick={contactScroll}>Contact</button></>
                  :
                  <></>
               }
               {isLoggedIn ? (
                  <li className='mx-4 text-xl font-semibold'>
                     <button onClick={handleProfile} className='font-bold'>{username}</button>
                  </li>
               ) : (
                  <li className='mx-4 text-xl font-semibold'>
                     <button onClick={handleLogin} className='font-bold py-2 px-4 border-1 border-black rounded-lg'>Login</button>
                  </li>
               )}
            </ul>
         </div>
      </div>
   )
}

export default Navbar;
