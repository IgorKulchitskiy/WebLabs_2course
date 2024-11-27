import React, { createContext, useState, useEffect } from 'react';
import { helis } from './data/dataCatalog';

export const CatalogContext = createContext();

export const CatalogProvider = ({ children }) => {
  const [visibleHelis, setVisibleHelis] = useState(9);
  const [filteredHelis, setFilteredHelis] = useState(helis);
  const [searchValue, setSearchValue] = useState('');

  // кнопка "Show More"
  const handleViewMore = () => {
    setVisibleHelis((prevVisible) => prevVisible + 9);
  };

  // сортування по зростанню і спаданню ціни
  const handleSortDecreaseSpeed = () => {
    const sortedHelis = [...filteredHelis].sort((a, b) => b.max_speed - a.max_speed);
    setFilteredHelis(sortedHelis);
  };

  const handleSortIncreaseSpeed = () => {
    const sortedHelis = [...filteredHelis].sort((a, b) => a.max_speed - b.max_speed);
    setFilteredHelis(sortedHelis);
  };

  const handleSortDecreaseCapacity = () => {
    const sortedHelis = [...filteredHelis].sort((a, b) => b.passenger_capacity - a.passenger_capacity);
    setFilteredHelis(sortedHelis);
  };

  const handleSortIncreaseCapacity = () => {
    const sortedHelis = [...filteredHelis].sort((a, b) => a.passenger_capacity - b.passenger_capacity);
    setFilteredHelis(sortedHelis);
  };

  // пошук
  useEffect(() => {
    const updatedHelis = helis.filter(heli =>
      heli.name.toLowerCase().includes(searchValue.toLowerCase().trim())
    );
    setFilteredHelis(updatedHelis);
  }, [searchValue]);

  // кнопка Reset
  const handleReset = () => {
    setSearchValue('');
    setVisibleHelis(9);
    setFilteredHelis(helis);
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
        handleSortDecreaseSpeed,
        handleSortIncreaseSpeed,
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
