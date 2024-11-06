import React from 'react';
import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Catalog from './components/Catalog/Catalog.jsx'
import './css/main.css'
import { Helis } from './data/dataCatalog.js'
import HeroSection from './components/HeroSection/HeroSection.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Catalog Helis = {Helis}/>
      <div className="button-container">
        <button className='viewMoreBtn'>View more</button>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
