import React, {useState, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import AOS from 'aos'
import 'aos/dist/aos.css'

import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// import slide_image_1 from "./assets/images/img_1.jpg";
// import slide_image_2 from "./assets/images/img_2.jpg";
// import slide_image_3 from "./assets/images/img_3.jpg";
// import slide_image_4 from "./assets/images/img_4.jpg";
// import slide_image_5 from "./assets/images/img_5.jpg";
// import slide_image_6 from "./assets/images/img_6.jpg";
// import slide_image_7 from "./assets/images/img_7.jpg";
let slide_image_1 =
  "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60";
let slide_image_2 =
  "https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODIxMTgwMnx8ZW58MHx8fHx8&dpr=1&auto=format&fit=crop&w=294&h=294&q=60";
let slide_image_3 =
  "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NTAzNjE3MXx8ZW58MHx8fHx8&dpr=1&auto=format&fit=crop&w=294&h=294&q=60";
let slide_image_4 =
  "https://images.unsplash.com/photo-1434873740857-1bc5653afda8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw1MDM2MTcxfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60";
let slide_image_5 =
  "https://images.unsplash.com/photo-1690848095491-942c798366b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60";
let slide_image_6 =
  "https://images.unsplash.com/photo-1689600570529-0e87f50e4687?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60";
let slide_image_7 = "https://picsum.photos/200/300";

function Imgslider() {
  // Delay on hover functionality------
  const [hoverDelay, setHoverDelay] = useState("500");

  const handleMouseEnter = () => {
    setHoverDelay("2000");
  };

  const handleMouseLeave = () => {
    setHoverDelay("500");
  };
  // ----------------------------------
  //zoom out effect on scroll
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div  
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="container"
    >
      {/* <h1 className="heading">Image Gallery</h1> */}
      <Swiper
        data-aos="zoom-out" data-aos-duration="5000" data-aos-delay="100"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5
        }}
        autoplay={{
          delay: 200,
          disableOnInteraction: false
          // pauseOnMouseEnter: true
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide data-swiper-autoplay={hoverDelay}>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide data-swiper-autoplay={hoverDelay}>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide data-swiper-autoplay={hoverDelay}>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide data-swiper-autoplay={hoverDelay}>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide data-swiper-autoplay={hoverDelay}>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide data-swiper-autoplay={hoverDelay}>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide data-swiper-autoplay={hoverDelay}>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Imgslider;
