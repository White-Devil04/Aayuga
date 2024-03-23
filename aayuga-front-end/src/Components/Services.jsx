import { Link } from 'react-router-dom';
import logo from '../utils/logo-light.png';
function Services() {
    return (
        <div id="services" className="flex h-screen w-full items-center bg-gradient-to-b from-blue-100">
            <div id="services-left" className='mx-24'>
                <div className=''>
                    <Link to='/chatbot'>ChatBot</Link><br/>
                    <Link to='/Pose'>Try live demo</Link>
                </div>
            </div>
            <img id="services-flower" src={logo} height='400px' width='400px' className='ms-52' />
        </div>
    );
}

export default Services;