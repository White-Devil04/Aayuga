import logo from '../utils/logo.png';
function Contact() {
    return (
        <div>
            <div id="contact" className="flex h-72 w-full items-center bg-[#22c9ef]">
                <div className='mx-8 flex items-center'>
                    <img src={logo} height='200px' width='200px' className='mx-28' />
                    <ul>
                        <li className='m-2 text-lg'><span className='font-semibold'>Email :</span> xyz@aayuga.com</li>
                        <li className='m-2 text-lg'><span className='font-semibold'>Phone :</span> 1234567890</li>
                        <li className='m-2 text-lg'><span className='font-semibold'>Address :</span> 123, Aayuga Street, Aayuga City</li>
                        <li className='m-2 text-lg'><span className='font-semibold'>Pincode :</span> 123456</li>
                    </ul>
                </div>

            </div>
            <footer className='w-full text-center bg-[#22c9ef] text-sm pb-3'> @All Rights are Reserved by Aayuga.</footer>
        </div>
    );
}

export default Contact;