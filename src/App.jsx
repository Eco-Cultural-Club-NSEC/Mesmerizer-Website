
import Navbar from './components/Pages/Navbar/Nav'
import Home from './components/Pages/Home/Home';
import Events from './components/Pages/Events/Events';
import Teams from './components/Pages/Teams/Teams';
import Gallery from './components/Pages/Gallery/Gallery';
import Footer from './components/Footer/Footer'

import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Main>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/galary" element={<Gallery />} />
      </Routes>

      <Footer />
    </Main>
  );
};

export default App;