import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="about">
      <div
        data-aos="zoom-in"
        data-aos-offset="300"
        data-aos-duration="500"
        className="about-line" />
      <div className="about-section">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="300"
          className="about-content">
          <p>
            {`In the year 2002, Netaji Subash Engineering College (NSEC) held its
            first cultural fest, MESMERIZER, which left a lasting impression on
            everyone who attended. This event was so impressive that it left people
            amazed and speechless.`}
            <br />
            <br />
            {`In 2022, NSEC decided to bring back MESMERIZER with even more vigor and
            enthusiasm. This time, the theme for the event was "RISING FROM ITS
            ASHES," indicating that they were ready to take the fest to a new level.`}
            <br />
            <br />
            {`MESMERIZER is a two-day socio-cultural celebration that takes place
            every year. The fest is renowned for hosting a wide range of events that
            appeal to a diverse audience. The presence of various esteemed and
            versatile artists further adds to the fest's allure.`}
            <br />
            <br />
            {`Join us for this incredible event and get ready to be mesmerized!`}
          </p>
        </div>
        <div
          data-aos="zoom-in-down"
          className="about-header">
          <h2>
            ABOUT <br /> ABOUT
            <br />
            <span className="white-heading">ABOUT</span>
          </h2>
        </div>
      </div>
    </div>

  )
}
