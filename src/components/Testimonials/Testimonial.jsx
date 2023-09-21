import { useState, useEffect } from 'react';
import "./testimonial.css"

import uData from "./uData";
import Maincomponent from "./Maincomponent";

import AOS from 'aos'
import 'aos/dist/aos.css'

const showData = (data) => {
    return (
        <Maincomponent
            key={data.id}
            name={data.name}
            imgSrc={data.imgSrc}
            content={data.content}
            designation={data.designation}
        />
    );
};


const Testimonial = () => {

    useEffect(() => {
        AOS.init()
    }, [])

    const [slideTransform, setSlideTransform] = useState(0);
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);

    const handleSlideClick = (translation, buttonIndex) => {
        setSlideTransform(translation);
        setActiveButtonIndex(buttonIndex);
    };

    return (
        <div className="testimonial-main">

            {/* header part */}
            <div className="testimonial-header">
                <div
                    data-aos="zoom-in"
                    data-aos-offset="300"
                    data-aos-duration="1000"
                    className="testimonial-header-line"></div>
                <div
                    data-aos="zoom-in-down"
                    className="testimonial-header-text">
                    <h2>
                        TESTIMONIALS
                        <br />
                        <span className="white-heading">TESTIMONIALS</span>
                        <br /> TESTIMONIALS
                    </h2>
                </div>
            </div>

            {/* main content part */}
            {/* <div className="testimonial-main-content"> */}
            <div className="testimonial-content">
                <div className="box">
                    <div className="indicator">
                        <span
                            className={`dot ${activeButtonIndex === 0 ? "active" : ""}`}
                            onClick={() => handleSlideClick(0, 0)}
                        ></span>
                        <span
                            className={`dot ${activeButtonIndex === 1 ? "active" : ""}`}
                            onClick={() => handleSlideClick(-100, 1)}
                        ></span>
                        <span
                            className={`dot ${activeButtonIndex === 2 ? "active" : ""}`}
                            onClick={() => handleSlideClick(-200, 2)}
                        ></span>
                    </div>

                    <div className="testimonial">
                        <div
                            className="slide-row"
                            id="slide"
                            style={{ transform: `translateX(${slideTransform}rem)` }}
                        >
                            {uData.map(showData)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default Testimonial;