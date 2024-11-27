import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Layout from './pages/Layout.jsx';
import CatalogPage from './pages/CatalogPage.jsx';
import ItemPage from './pages/ItemPage.jsx';
import { CatalogProvider } from './CatalogContext.js';
import './css/main.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='/' element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/heli/:id' element={<ItemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
