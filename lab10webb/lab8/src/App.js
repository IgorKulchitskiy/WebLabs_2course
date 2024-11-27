import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Layout from './pages/Layout.jsx';
import CatalogPage from './pages/CatalogPage.jsx';
import ItemPage from './pages/ItemPage.jsx';
import { Provider } from 'react-redux';
import store from './cardRedux/store.js';
import CartPage from './pages/CartPage.jsx';
import './css/main.css'


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index path='/' element={<HomePage />} />
            <Route path='/catalog' element={<CatalogPage />} />
            <Route path='/heli/:id' element={<ItemPage />} />
            <Route path='/cart' element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
