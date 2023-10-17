// import { useState, useEffect } from 'react';
import UnderConstruction from "./components/UnderConstruction/UnderConstruction";

// import Navbar from './components/Navbar/Nav'
// import Home from './components/Pages/Home/Home';
// import Events from './components/Pages/Events/Events';
// import Teams from './components/Pages/Teams/Teams';
// import Gallery from './components/Pages/Gallery/Gallery';
// import Footer from './components/Footer/Footer';
// import Preoader from './components/Preloader/Preloader';

// import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';


const App = () => {

  // Preloader Code

  // const [showBlock, setBlock] = useState("none");
  // const [hideLoader, sethideLoader] = useState("block");

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setBlock("block");
  //     sethideLoader("none");
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    
      // <Main>
        /* <div style={{ display: hideLoader }} className="loader">
          <Preoader />
        </div>
        <div style={{ display: showBlock }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          <Footer />
        </div> */
      // </Main>
      <UnderConstruction />
  );
};

export default App;