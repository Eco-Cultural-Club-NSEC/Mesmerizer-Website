// import React from 'react'
import Hero from '../../Hero/Hero';
import '../../Hero/hero.css';

import Imgslider from '../../Imgslider/Imgslider';
import "../../Imgslider/imgslider.css"

import About from '../../About/About';
import "../../About/about.css";

import Previousevent from '../../Previous-events/Previousevent';
import '../../Previous-events/previousevent.css';

import LogoSlider from '../../Logoslider/LogoSlider'
import '../../Logoslider/logoslider.css';

import Testimonial from '../../Testimonials/Testimonial';
import '../../Testimonials/testimonial.css';

 const Home = () => {
  return (
    <div>
        <Hero />
        <Imgslider />
        <About />
        <Previousevent/>
        <LogoSlider/>
        <Testimonial />
    </div>
  );
}
export default Home;