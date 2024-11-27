import React, { createContext, useState, useEffect } from 'react';
import { heli } from './data/dataCatalog';

export const CatalogContext = createContext();

export const CatalogProvider = ({ children }) => {
  const [visibleHelis, setVisibleHelis] = useState(9);
  const [filteredHelis, setFilteredHelis] = useState(heli);
  const [searchValue, setSearchValue] = useState('');

  // "Show More" button
  const handleViewMore = () => {
    setVisibleHelis((prevVisible) => prevVisible + 9);
  };

  // Sorting by price in descending and ascending order (assuming 'max_speed' as the criteria here)
  const handleSortDecreaseMaxSpeed = () => {
    const sortedHelis = [...filteredHelis].sort((a, b) => b.max_speed - a.max_speed);
    setFilteredHelis(sortedHelis);
  };

  const handleSortIncreaseMaxSpeed = () => {
    const sortedHelis = [...filteredHelis].sort((a, b) => a.max_speed - b.max_speed);
    setFilteredHelis(sortedHelis);
  };

  // Sorting by passenger capacity
  const handleSortDecreaseCapacity = () => {
    const sortedHelis = [...filteredHelis].sort((a, b) => b.passenger_capacity - a.passenger_capacity);
    setFilteredHelis(sortedHelis);
  };

  const handleSortIncreaseCapacity = () => {
    const sortedHelis = [...filteredHelis].sort((a, b) => a.passenger_capacity - b.passenger_capacity);
    setFilteredHelis(sortedHelis);
  };

  // Search
  useEffect(() => {
    const updatedHelis = heli.filter(h =>
      h.name.toLowerCase().includes(searchValue.toLowerCase().trim())
    );
    setFilteredHelis(updatedHelis);
  }, [searchValue]);

  // Reset button
  const handleReset = () => {
    setSearchValue('');
    setVisibleHelis(9);
    setFilteredHelis(heli);
  };

  const visibleFilteredHelis = filteredHelis.slice(0, visibleHelis);

  return (
    <CatalogContext.Provider
      value={{
        visibleHelis,
        setVisibleHelis,
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
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
};
