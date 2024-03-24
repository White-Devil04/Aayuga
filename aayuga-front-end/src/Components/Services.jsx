import { Link } from 'react-router-dom';
import logo from '../utils/logo-light.png';
import cht_bt from '../utils/chatbot_stock.mp4';
import pose_ai from '../utils/pose_stock.mp4';
function Services() {
    return (
        <div id="services" className="flex h-screen w-full items-center bg-gradient-to-b from-blue-100">
            <div id="services-left" className='mx-24'>
                <div id='services-left' className='mx-4 rounded-xl bg-blue-300 flex'>
                    <div id='cht-bt' className='flex flex-col w-60 mx-4 my-5 items-center'>
                        <video src={cht_bt} autoPlay loop muted className='w-56 mb-4 rounded-lg'></video>
                        <p>We provide the <span className='font-bold'>chatbot</span> which gives you 24x7 advice According to your doubts related to Health, just for you on your fingure tips!!</p>
                        <Link to='/chatbot' className='mt-4 py-2 px-4 border-2 border-black rounded-lg'>Try the Chatbot</Link>
                    </div>
                    <div id='cht-bt' className='flex flex-col w-60 mx-4 my-5 items-center'>
                        <video src={pose_ai} autoPlay loop muted className='w-56 mb-4 rounded-lg'></video>
                        <p>We provide the <span className='font-bold'>Yoga Ai</span> which provides you personal yoga trainer which provide you the accuracy of your ypga pose, any time any where!!</p>
                        <Link to='/Pose' className='mt-4 py-2 px-4 border-2 border-black rounded-lg'>Try the Yoga Ai</Link>
                    </div>
                </div>
            </div>
            <img id="services-flower" src={logo} height='400px' width='400px' className='ms-2' />
        </div>
    );
}

export default Services;