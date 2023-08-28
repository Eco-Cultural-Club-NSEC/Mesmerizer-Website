import { useEffect } from 'react';
import "./testimonial.css"

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import AOS from 'aos'
import 'aos/dist/aos.css'

const Maincomponent = (Props) => {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="slide-col">
      <div
        className="user-text">
        <FormatQuoteIcon className='quote-icon' />
        <p>{Props.content}</p>
        <h3>{Props.name}</h3>
        <p>{Props.designation}</p>
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-duration="1000"
        className="user-img">
        <img src={Props.imgSrc} alt="pic" />
      </div>
    </div>
  );
};

export default Maincomponent;
