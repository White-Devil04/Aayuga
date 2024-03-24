import React from 'react'
import { Link } from 'react-router-dom'

// renders only when user loggedIn
const Profile = () => {
   const handleSignout = () => {

   }
   return (
      <div className='bg-slate-200 mx-[3vw]'>
         <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-2 text-center inline-flex items-center" type="button">
            <img src='' alt=''></img>
            <h2 className='mx-1'>UserName</h2>
            <div className='text-3xl'><i className="ri-arrow-drop-down-fill"></i></div>
         </button>
         <div id="dropdownHover" className="z-10 hidden divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
               <li>
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Profile</Link>
               </li>
               <li>
                  <button onClick={handleSignout}>SignOut</button>
               </li>
            </ul>
         </div>

      </div>
   )
}

export default Profile