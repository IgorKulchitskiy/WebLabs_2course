import React, { useState } from 'react';
import Catalog from '../components/CatalogPageComponents/Catalog/Catalog.jsx';
import HeroSection from '../components/HomePageComponents/HeroSection/HeroSection.jsx';
import ButtonViewMore from '../components/Buttons/ButtonViewMore/ButtonViewMore.jsx';
import { heli } from '../data/dataCatalog.js';

function Home() {
  const [visibleTrees, setVisibleTrees] = useState(9);

  const handleViewMore = () => {
    setVisibleTrees((prevVisible) => prevVisible + 9);
  };

  const visibleFilteredTrees = heli.slice(0, visibleTrees);

  return (
    <div className="App">
      <HeroSection />
      <Catalog trees={visibleFilteredTrees} />
      {visibleTrees < heli.length && ( <ButtonViewMore name='Show' onClick={handleViewMore} /> )}
    </div>
  );
}

export default Home;
