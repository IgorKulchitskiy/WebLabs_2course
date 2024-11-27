import React, { useState, useEffect } from 'react';
import Catalog from '../components/CatalogPageComponents/Catalog/Catalog.jsx';
import SearchAndSortSection from '../components/SearchAndSortSection/SearchAndSortSection.jsx';
import ButtonViewMore from '../components/Buttons/ButtonViewMore/ButtonViewMore.jsx';
import Loader from '../components/Loader/Loader';
import { getAllHelis, getSortHelis, searchHelis } from '../api.js';

function CatalogPage() {
  const [visibleHelis, setVisibleHelis] = useState(9);
  const [helis, setHelis] = useState([]);
  const [filteredHelis, setFilteredHelis] = useState(helis);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    const fetchHelis = async () => {
      try {
        setLoading(true);
        const allHelis = await getAllHelis();
        setHelis(allHelis);
        setFilteredHelis(allHelis);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 100);
      }
    };
    fetchHelis();
  }, []);

  useEffect(() => {
    const sortHelis = async () => {
      if (sortType === '') return;
      try {
        setLoading(true);
        const sortedtr = await getSortHelis(sortType, searchValue);
        setFilteredHelis(sortedtr);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 100);
      }
    };
    sortHelis();
  }, [sortType]);

  useEffect(() => {
    const fetchUpdatedHelis = async () => {
      if (searchValue.length < 4) {
        setFilteredHelis(helis);
        return;
      }

      try {
        setLoading(true);
        let updatedHelis;
  
        if (sortType) {
          updatedHelis = await getSortHelis(sortType, searchValue);
        } else {
          updatedHelis = await searchHelis(searchValue);
        }
  
        setFilteredHelis(updatedHelis);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 10);
      }
    };
  
    fetchUpdatedHelis();
  }, [searchValue, helis, sortType]);
  
  useEffect(() => {
    if (!loading) {
      const inputElement = document.getElementById('find_input');
      if (inputElement) inputElement.focus();
    }
  }, [loading]);

  const handleReset = () => {
    setSearchValue('');
    setVisibleHelis(9);
    setFilteredHelis(helis);
  };

  const handleViewMore = () => {
    setVisibleHelis((prevVisible) => prevVisible + 9);
  };

  const visibleFilteredHelis = filteredHelis.slice(0, visibleHelis);

  if (loading) return <Loader loading={loading} />;

  return (
    <div>
      <SearchAndSortSection 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleReset={handleReset}
        setSortType={setSortType}
        sortType={sortType}
      />
      <Catalog trees={visibleFilteredHelis} />
      {visibleHelis < filteredHelis.length && (
        <ButtonViewMore name="Show" onClick={handleViewMore} />
      )}
    </div>
  );
}

export default CatalogPage;
