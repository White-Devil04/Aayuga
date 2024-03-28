import React from 'react'

const Loading = () => {
   return (
      <div className='h-screen w-full bg-gradient-to-t bg-gradient-to-t from-[#72ddf5]'>
         <img src='./src/utils/logo-light.png' height='400px' width='400px' className='loading-img-container'></img>
         <p className='name-container '>Aayuga</p>
         <div className="loader-line"></div>
      </div>
   )
}

export default Loading;
