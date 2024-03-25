import React from 'react'
import logo from '../utils/logo.png';

function LogoTitle() {
   return (
      <div className='flex items-center p-2 mx-[3vw]'>
         <img src={logo} alt="Aayuga" height='50px' width='50px' />
         <h1 className='mx-2 text-2xl'>Aayuga</h1>
      </div>
   )
}

export default LogoTitle;