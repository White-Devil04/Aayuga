import React from 'react';
import logo from '../utils/logo.png';
import leftImage from '../utils/about-left.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function About() {
  useGSAP(() => {
    gsap.to('#about-left', {
      opacity: 0,
      x: -100,
      scrollTrigger: {
        trigger: '#about',
        start: 'bottom 90%',
        end: 'bottom 30% ',
        scrub: 2,
      }
    }),
      gsap.to('#about-right', {
        opacity: 0,
        x: 100,
        scrollTrigger: {
          trigger: '#about',
          start: 'bottom 90%',
          end: 'bottom 30% ',
          scrub: 2
        }
      })
  }, []);
  return (
    <div id="about" className="flex h-screen w-full items-center bg-[#72ddf5] overflow-x-hidden">
      <img id="about-left" src={leftImage} height='450px' width='270px' className='rounded-lg drop-shadow-lg mx-32' />
      <img id="about-flower" src={logo} height='200px' width='200px' className='-m-12 ' />
      <div id="about-right" className='ms-32 z-0 text-left'>
        <h1 className="text-6xl font-bold my-2">About</h1>
        <p className="text-2xl font-semibold mt-4">What is <span className='font-bold text-[#2262ef]'>Aayuga</span> ?</p>
        <p className='me-8'>Aayuga is platfrom which provides the AI based Personal Diet planner, Yoga Trainer and Health Advisor for 24x7.</p>
        <p className="text-2xl font-semibold mt-4">Why <span className='font-bold text-[#2262ef]'>Aayuga</span> is needed nowadays ?</p>
        <p className='me-8'>Modern lifestyle trends of prolonged sitting, reduced exercise, and poor dietary choices lead to health issues, shortening lives and productivity. Ayurveda and yoga offer holistic health solutions, yet access is limited due to high costs. Lack of resources hinders hiring personal trainers and diet planners for convenient fitness routines.<br /> Here, where Aayuga Come to your help to solve this problem.</p>
      </div>
    </div>
  );
}

export default About;