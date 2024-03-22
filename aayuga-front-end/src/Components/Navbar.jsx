import React from 'react';
import logo from '../utils/logo.png';

const Navbar = () => {
   return (
      <div id="navbar" className='fixed top-0 w-full z-50 flex content-between justify-between items-center bg-blue-300'>
         <div className="flex items-center m-2">
         <img src={logo} alt="Aayuga" height='50px' width='50px' className='ml-12 mr-3'/>
         <h1 className='mx-2 text-3xl font-black'>Aayuga</h1>
         </div>
         <div className='flex items-center m-2'>
            <ul className='flex items-center mr-12'>
               <li className='mx-5 text-xl font-semibold'>Home</li>
               <li className='mx-5 text-xl font-semibold'>About</li>
               <li className='mx-5 text-xl font-semibold'>Services</li>
               <li className='mx-5 text-xl font-semibold'>Contact</li>
            </ul>
            </div>
      </div>
   )
}

export default Navbar;