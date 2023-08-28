import { useEffect } from 'react'
import "./gallery.css"
import Imgslider from "../../Imgslider/Imgslider"
import Lightbox from "./Lightbox"


import AOS from 'aos'
import 'aos/dist/aos.css'


const Gallery = () => {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="gallery-main">
      <Imgslider />
      <div className='galary-header'>
        <h1 data-aos="fade-down">EXPLORE OUR <br /> GALLERY</h1>
      </div>
      <div
        className="galary-content">
        <Lightbox />
      </div>
    </div>
  )
}
export default Gallery;