import { useState } from 'react';
import './UnderConstruction.css'
import logo from './logo.png'

const UnderConstruction = () => {
    const[subText, setsubText]=useState("Notify me");
    function Submit(e) {
        e.preventDefault();
        setsubText("Submitted!!");
        const formEle = document.querySelector("form");
        const formDatab = new FormData(formEle);
        fetch(
          "https://script.google.com/macros/s/AKfycbwnZCE7YnxZ22GDSJeMif_UYP-OiVXaRnpWFE9Xj2al39gLkSZI2XVEp-kU1CnIXD-CLw/exec",
          {
            method: "POST",
            body: formDatab
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
    }
    return (
        <>
            <div className="main">
                <div className="logo">
                    <img src={logo} alt="logo" height={"60px"} width={"70px"} />
                </div>
                <div className="hero">
                    Sab Kuch <b>Dhundla</b> Hain??
                </div>
                <div className="caption">
                    <div className="caption1"><b>Be the first to know, what is so blurry?</b></div>
                    <div className="caption2">Join the waitlist now!!!</div>
                </div>
                <div className="form">
                    <form action="https://script.google.com/macros/s/AKfycbwnZCE7YnxZ22GDSJeMif_UYP-OiVXaRnpWFE9Xj2al39gLkSZI2XVEp-kU1CnIXD-CLw/exec" method='post' onSubmit={(e) => Submit(e)}>
                        <input type="email" name="email" placeholder='Enter your email address' id='text' required />
                        <input name="Name" type="submit" id='sub' value={subText}/>
                    </form>
                </div>
            </div>
            <div className="footer">
                <div className="div1">
                    <img src={logo} alt="logo" />
                    <p><i className="fa-regular fa-copyright"></i>     Mesmerizer 2024. Copyright reserved.</p>
                </div>
                <div className="div2">
                    <a href = "https://instagram.com/ecoculturalclub_nsec?igshid=MzRlODBiNWFlZA==">
                    <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href = "https://www.facebook.com/ecoculturalclubofnsec?mibextid=ZbWKwL">
                    <i className="fa-brands fa-facebook"></i>
                    </a>    
                </div>
            </div>
        </>
    )
}

export default UnderConstruction
