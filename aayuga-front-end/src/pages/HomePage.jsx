import React from 'react';
import About from '../Components/About.jsx';
import Home from '../Components/Home.jsx';
import Services from '../Components/Services.jsx';
import Webgi3D from '../Components/Webgi3D.jsx';
import Contact from '../Components/Contact.jsx';

const HomePage = () => {
  return (
    <div>
      <Webgi3D />
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  )
}

export default HomePage