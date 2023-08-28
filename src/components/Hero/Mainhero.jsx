import "./hero.css"

const Mainhero = (Props) => {
    return (
      <div data-aos="zoom-in" className="hero-main">
        <div className={Props.slide}>
          <span className={Props.text1}>{Props.content}</span>
          <span className={Props.text2}>{Props.content}</span>
        </div>
        <div className={Props.slide}>
          <span className={Props.text1}>{Props.content}</span>
          <span className={Props.text2}>{Props.content}</span>
        </div>
      </div>
    );
  };
  
  export default Mainhero;
  