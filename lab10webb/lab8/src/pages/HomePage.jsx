import React, { useState, useEffect } from 'react';
import Catalog from '../components/CatalogPageComponents/Catalog/Catalog.jsx';
import HeroSection from '../components/HomePageComponents/HeroSection/HeroSection.jsx';
import ButtonViewMore from '../components/Buttons/ButtonViewMore/ButtonViewMore.jsx';
import { getAllHelis } from '../api.js';
import Loader from '../components/Loader/Loader.jsx';

function Home() {
  const [visibleHelis, setVisibleHelis] = useState(9);
  const [helis, setHelis] = useState([]);
  const [filteredHelis, setFilteredHelis] = useState(helis);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrees = async () => {
      try {
        setLoading(true);
        const allHelis = await getAllHelis();
        setHelis(allHelis);
        setFilteredHelis(allHelis);
      } finally {
        setTimeout(() => {
          setLoading(false)
        }, 100)
      }
    };
    fetchTrees();
  }, []);


  const handleViewMore = () => {
    setVisibleHelis((prevVisible) => prevVisible + 9);
  };


  const visibleFilteredHelis = filteredHelis.slice(0, visibleHelis);

  return (
    <div className="App">
      <HeroSection />

      {loading ? (
        <Loader loading={loading} />
      ) : (
        <>
          <Catalog trees={visibleFilteredHelis} />
          {visibleHelis < helis.length && ( <ButtonViewMore name='Show' onClick={handleViewMore} /> )}
        </>
      )}
    </div>
  );
}

export default Home;