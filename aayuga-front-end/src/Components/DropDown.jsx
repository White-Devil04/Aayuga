import { React, useState } from 'react';

import { poseImages } from '../utils/pose_images';


export default function DropDown({ poseList, setCurrentPose }) {
    const [viewChat, setViewChat] = useState(false);

    const handleView = () => {
        setViewChat(true);
    }

    const handleCloseView = () => {
        setViewChat(false);
    }

    const handlePose = (pose) => {
        setCurrentPose(pose);
        setViewChat(false);
    }
    return (
        <div
            className=''

        >
            <button className="text-white bg-[#2262ef] hover:bg-blue-800 font-medium rounded-lg text-sm px-2 text-center inline-flex justify-center items-start m-3 w-[300px]" type="button" onClick={handleView}>
                <h2 className='mx-1 p-3'>Select Pose</h2>
            </button>
            <div className="overlay mt-8 fixed overlay-container rounded-lg bg-gray-700 w-[400px]">
                {(viewChat) && <ul className="grid grid-cols-1 text-sm text-gray-700 dark:text-gray-200 px-[100px]">
                    {poseList.map((pose, index) => (
                        <div key={index}>
                            <button onClick={handleCloseView} className='absolute top-2 right-4 text-3xl'>
                                <i className="ri-close-circle-fill"></i>
                            </button>
                            <li onClick={() => handlePose(pose)} className=''>
                                <div className="flex justify-center items-center my-3 cursor-pointer">
                                    <p className="dropdown-item-1 m-3">{pose}</p>
                                    <img
                                        src={poseImages[pose]}
                                        className="dropdown-img"
                                        alt={`${pose}`}
                                        height="50px"
                                        width="50px"
                                    />
                                </div>
                            </li>
                        </div>
                    ))}
                </ul>}
            </div>
        </div>
    )
}
