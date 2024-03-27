import React from 'react';
import logo from '../utils/logo-light.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Home() {

  useGSAP(() => {
    gsap.to('#home-left', {
      opacity: 0,
      x: -100,
      scrollTrigger: {
        trigger: '#home',
        start: 'top -10%',
        end: 'bottom 30% ',
        scrub: 2,
      }
    })
  }, []);

  return (
    <div id="home" className="flex h-screen w-full items-center bg-gradient-to-t from-[#72ddf5]">
      <div id="home-left" className='mx-24 text-left'>
        <h1 className="text-7xl font-bold  my-2">Aayuga</h1>
        <p className="text-2xl font-semibold mb-2">Your Personal <span className='font-extrabold text-[#2262ef]'>YOGA</span> Trainer</p>
        <p className='text-sm'><span className='font-semibold text-[#2262ef]'>Personal</span> Diet Planner <br /><span className='font-semibold text-[#2262ef]'>Personal</span> Health Advisor</p>
      </div>
      <img id="home-flower" src={logo} height='400px' width='400px' className='ms-52' />
    </div>
  );
}

export default Home;