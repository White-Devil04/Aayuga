import React , { useState } from 'react';
import logo from '../utils/logo.png';

const Navbar = () => {

   const homeScorll = () => {
      document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
   }
   const aboutScorll = () => {
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
   }
   const servicesScorll = () => {
      document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
   }
   const contactScorll = () => {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
   }
   const [isLoggedIn, setIsLoggedIn] = useState(false); // Set this to true when the user logs in

   return (
      <div id="navbar" className='fixed top-0 w-full flex content-between justify-between items-center bg-blue-300 z-50'>
         <div className="flex items-center m-2">
            <img src={logo} alt="Aayuga" height='50px' width='50px' className='ml-12 mr-3' />
            <h1 className='mx-2 text-3xl font-black'>Aayuga</h1>
         </div>
         <div className='flex items-center m-2'>
            <ul className='flex items-center mr-12'>
               <button className='mx-4 text-xl font-semibold' onClick={homeScorll}>Home</button>
               <button className='mx-4 text-xl font-semibold' onClick={aboutScorll}>About</button>
               <button className='mx-4 text-xl font-semibold' onClick={servicesScorll}>Services</button>
               <button className='mx-4 text-xl font-semibold' onClick={contactScorll}>Contact</button>

            </ul>
            <div className='flex items-center m-2'>
               
            </div>
         </div>
      </div>
   )
}

export default Navbar;