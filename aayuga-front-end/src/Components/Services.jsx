import { Link, useNavigate } from 'react-router-dom';
import cht_bt from '../utils/chatbot_stock.mp4';
import logo from '../utils/logo-light.png';
import pose_ai from '../utils/pose_stock.mp4';
import { useEffect, useState } from 'react';
function Services() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState();
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = document.cookie.split('; ').find(row => row.startsWith('Token='));
                if (!token) {
                    console.log('Token not found');
                    setIsLoggedIn(false);
                }
                else {
                    setIsLoggedIn(true);
                }
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };
        fetchUserProfile();
    }, []);

    const handleChatBotNavigate = () => {
        if (isLoggedIn) {
            navigate('/chatbot');
        }
        else {
            navigate('/login');
        }
    }
    const handlePoseNavigate = () => {
        if (isLoggedIn) {
            navigate('/pose');
        }
        else {
            navigate('/login');
        }
    }

    return (
        <div id="services" className="flex h-screen w-full items-center bg-gradient-to-b from-[#72ddf5]">
            <div id="services-left" className='mx-24'>
                <div id='services-left' className='mx-4 rounded-xl bg-[#22c9ef] flex'>
                    <div id='cht-bt' className='flex flex-col w-60 mx-4 my-5 items-center'>
                        <video src={cht_bt} autoPlay loop muted className='w-56 mb-4 rounded-lg'></video>
                        <p className='text-sm'>We provide the <span className='font-bold'>chatbot</span> which gives you 24x7 advice According to your doubts related to Health, just for you on your fingure tips!!</p>
                        <button onClick={handleChatBotNavigate} className='mt-4 py-2 px-4 border-2 border-black rounded-lg'>Try the Chatbot</button>
                    </div>
                    <div id='cht-bt' className='flex flex-col w-60 mx-4 my-5 items-center'>
                        <video src={pose_ai} autoPlay loop muted className='w-56 mb-4 rounded-lg'></video>
                        <p className='text-sm'>We provide the <span className='font-bold'>Yoga Ai </span>which provides you personal yoga trainer which provide you the accuracy of your yoga pose, any time any where!!</p>
                        <button onClick={handlePoseNavigate} className='mt-4 py-2 px-4 border-2 border-black rounded-lg'>Try the Yoga Ai</button>
                    </div>
                </div>
            </div>
            <img id="services-flower" src={logo} height='400px' width='400px' className='ms-2' />
        </div>
    );
}

export default Services;