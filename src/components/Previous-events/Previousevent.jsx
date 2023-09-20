import { useEffect } from "react";
import "./previousevent.css";
import { Link } from "react-router-dom";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


import AOS from 'aos'
import 'aos/dist/aos.css'


const img = {
    img1:
        "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    img2:
        "https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    img3:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    img4:
        "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
};

export default function Previousevent() {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="prevevent-main">
            {/* header-section */}
            <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-duration="500"
                className="prevevent-header">
                <h2>
                    PREVIOUS EVENTS
                    <br />
                    <span className="white-heading">PREVIOUS EVENTS</span>
                    <br /> PREVIOUS EVENTS
                </h2>
            </div>

            {/* events images div */}
            <div className="prevevent-container">
                <div
                    data-aos="fade-right"
                    data-aos-offset="50"
                    data-aos-easing="ease-in-sine"
                    className="item item-1">
                    <div className="item-header">
                        <h1> 1.Waves in Town</h1>
                        <h3>To make ‘ Shaam Gulaabi, Chyan Gulaabi’</h3>
                    </div>
                    <img src={img.img1} alt="img" />
                </div>
                <div
                    className="item item-2"
                    data-aos="fade-left"
                    data-aos-offset="50"
                    data-aos-duration="500">
                    <img src={img.img2} alt="img" />
                </div>
                <div
                    className="item item-3"
                    data-aos="fade-right"
                    data-aos-offset="50"
                    data-aos-easing="ease-in-sine">
                    <img src={img.img3} alt="img" />
                </div>
                <div
                    className="item item-4"
                    data-aos="fade-left"
                    data-aos-offset="50"
                    data-aos-duration="500">
                    <div className="item-header">
                        <h1> 2.EPR IYER</h1>
                        <h3>1st Solo Performance in his career</h3>
                    </div>
                    <img src={img.img4} alt="img" />
                </div>
            </div>

            {/* see all photos button */}
            <div className="see-all">
                <div data-aos="zoom-in"
                    data-aos-offset="150"
                    data-aos-duration="500" className="end-line"></div>
                <div
                    className="galary-btn"
                    data-aos="fade-up"
                    data-aos-duration="500">
                    <Link className="text" to="/gallery" >See All Photos
                        <ArrowCircleRightIcon className="icon"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
