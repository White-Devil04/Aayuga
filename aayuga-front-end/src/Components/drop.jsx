import React from 'react'

export default function DropDown({ poseList, currentPose, setCurrentPose }) {
   return (
      <div
         className='flex justify-center'
      >
         <button className="btn bg-[#2262ef] dropdown-toggle hover:bg-slate-700 w-[400px] m-4 p-2" name='Poses'>
            <ul >
               {poseList.map((pose, index) => (
                  <li className='m-2 p-2' value={pose} onClick={() => setCurrentPose(pose)} key={index}>
                     <p className="m-[10px] p-10">{pose}</p>
                  </li>
               ))}
            </ul>
         </button>
      </div>
   )
}
