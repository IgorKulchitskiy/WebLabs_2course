import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Layout from './pages/Layout.jsx';
import CatalogPage from './pages/CatalogPage.jsx';
import './css/main.css'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='/' element={<Home />} />
          <Route path='/catalog' element={<CatalogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
