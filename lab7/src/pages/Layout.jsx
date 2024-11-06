import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';

function Layout() {
  return (
    <div className="App">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
