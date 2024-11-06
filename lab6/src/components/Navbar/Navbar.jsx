import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.svg";

function Navbar() {
    return (
        <div className="header">
            <nav className="main-navigation">
                <ul>
                    <li><a href="#" className="nav-links"><span>Home</span></a></li>
                    <li><a href="#" className="nav-links">Catalog</a></li>
                    <li><a href="#" className="nav-links">Cart</a></li>
                </ul>
            </nav>
            <img src={logo} alt="logo" className="logo"></img>
            <div className="buttons">
                <a href="#" className="login">Login</a>
                <a href="#" className="register">Register</a>
            </div>
            <input id="burger-toggle" type="checkbox"></input>
            <label for="burger-toggle">
                <span></span>
            </label>
            
            <div className="burger-menu">
                <ul>
                    <li><a href="#" className="nav-links"><span>Home</span></a></li>
                    <li><a href="#" className="nav-links">Catalog</a></li>
                    <li><a href="#" className="nav-links">Cart</a></li>
                </ul>
                <div class="buttons">
                    <a href="#" className="login">Login</a>
                    <a href="#" className="register">Register</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
