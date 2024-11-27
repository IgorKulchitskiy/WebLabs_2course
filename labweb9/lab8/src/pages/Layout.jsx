import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Layout/Footer/Footer.jsx';
import Navbar from '../components/Layout/Navbar/Navbar.jsx';
import '../css/main.css';

function Layout() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
