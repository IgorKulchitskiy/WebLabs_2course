import React from "react";
import "./Navbar.css";
import logo from "../../../images/logo.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="header">
            <nav className="main-navigation">
                <ul>
                    <li><NavLink to="/" className="nav-links"><span>Home</span></NavLink></li>
                    <li><NavLink to="/catalog" className={({ isActive }) => 
                                        isActive || window.location.pathname.startsWith("/tree") 
                                        ? "nav-links navCatalog active" 
                                        : "nav-links navCatalog"}>Catalog</NavLink></li>

                    <li><NavLink to="/cart" className="nav-links navCatalog">Cart</NavLink></li>
                </ul>
            </nav>
            <NavLink to="/"><img src={logo} alt="logo" className="logo"></img></NavLink>
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
                    <li><NavLink to="/" className="nav-links"><span>Home</span></NavLink></li>
                    <li><NavLink to="/catalog" className="nav-links">Catalog</NavLink></li>
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
