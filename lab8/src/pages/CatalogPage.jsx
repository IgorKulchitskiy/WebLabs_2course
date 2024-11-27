import React, { useContext } from 'react';
import { CatalogContext } from '../CatalogContext.js';
import Catalog from '../components/CatalogPageComponents/Catalog/Catalog.jsx';
import SearchAndSortSection from '../components/SearchAndSortSection/SearchAndSortSection.jsx';
import ButtonViewMore from '../components/Buttons/ButtonViewMore/ButtonViewMore.jsx';

function CatalogPage() {
  const {
    visibleHelis,
    filteredHelis,
    searchValue,
    setSearchValue,
    handleSortDecreaseMaxSpeed,
    handleSortIncreaseMaxSpeed,
    handleSortIncreaseCapacity,
    handleSortDecreaseCapacity,
    handleReset,
    handleViewMore,
    visibleFilteredHelis
  } = useContext(CatalogContext);


  return (
    <div>
      <SearchAndSortSection 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSortDecreasePrice={handleSortDecreaseMaxSpeed}
        handleSortIncreasePrice={handleSortIncreaseMaxSpeed}
        handleReset={handleReset}
        handleSortIncreaseHeight={handleSortIncreaseCapacity}
        handleSortDecreaseHeight={handleSortDecreaseCapacity}
      />

      <Catalog helis={visibleFilteredHelis} />

      {visibleHelis < filteredHelis.length && (
        <ButtonViewMore name='Show' onClick={handleViewMore} />
      )}
    </div>
  );
}

export default CatalogPage;
