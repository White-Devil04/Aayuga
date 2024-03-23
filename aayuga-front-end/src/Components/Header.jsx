import React from 'react'
import LogoTitle from './LogoTitle'
import Profile from './Profile'

const Header = () => {
   return (
      <div className='flex content-between justify-between items-center bg-slate-300'>
         <LogoTitle />
         <Profile />
      </div>
   )
}

export default Header
