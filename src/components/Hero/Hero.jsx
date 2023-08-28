import {useEffect} from "react";
import Mainhero from "./Mainhero";
import "./hero.css"

import AOS from 'aos'
import 'aos/dist/aos.css'


const css = [
  { id: 1, class: "hero-slide-1", text1: "text-1", text2: "text-2", content: "MESMERIZER" },
  { id: 2, class: "hero-slide-2", text1: "text-3", text2: "text-4", content: "MESMERIZER" },
  { id: 1, class: "hero-slide-1", text1: "text-1", text2: "text-2", content: "MESMERIZER" },
  { id: 2, class: "hero-slide-2", text1: "text-3", text2: "text-4", content: "MESMERIZER" }
];

function Heroslider(css) {
  return <Mainhero slide={css.class} text1={css.text1} text2={css.text2} content={css.content}/>;
}

export default function Hero() {
  useEffect(() => {
    AOS.init()
}, [])

  return <div className="hero-container">{css.map(Heroslider)}</div>;
}
