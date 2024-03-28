import React from 'react';

import { poseInstructions } from '../data';
import { poseImages } from '../utils/pose_images';

export default function Instructions({ currentPose }) {

    const instructions = poseInstructions;

    return (
        <div className="flex justify-center items-center bg-gray-100 mx-10 py-2 px-10">
            <div className='flex-col'>
                <div className='bg-[#22c9ef] m-1 rounded-xl w-[600px] p-3'>{currentPose}
                </div>
                <ul className="mt-2 w-[600px] p-[10px] rounded-lg bg-white flex-col justify-center items-center">
                    {instructions[currentPose].map((instruction, index) => {
                        return (
                            <li className="instruction" key={index}>{instruction}</li>
                        )

                    })}
                </ul>
            </div>
            <img
                className="pose-demo-img m-10"
                src={poseImages[currentPose]}
                alt={`${currentPose}`}
            />
        </div>
    )
}
