import React from "react";
import "./Footer.css";
import logo from "../../../images/logo.svg";
import twitterIcon from "../../../images/twitter.svg";
import facebookIcon from "../../../images/facebook.svg";
import instagramIcon from "../../../images/instagram.svg";
import linkedinIcon from "../../../images/Frame.svg";
import youtubeIcon from "../../../images/youtube.svg";

function Footer() {
    return (
        <div className="footer">
            <div className="top-footer">
                <img src={logo} alt="logo"></img>
                <p>©2020 Thousand Sunny. All rights reserved</p>
            </div>
            <hr className="stroke"></hr>
            <div className="socialMedia">
                <a href="https://x.com/"><img src={twitterIcon} alt="twitter"/></a>
                <a href="https://www.facebook.com/"><img src={facebookIcon} alt="facebook"/></a>
                <a href="https://www.instagram.com/"><img src={instagramIcon} alt="instagram"/></a>
                <a href="https://ua.linkedin.com/"><img src={linkedinIcon} alt="linkedin"/></a>
                <a href="https://www.youtube.com/"><img src={youtubeIcon} alt="youtube"/></a>
            </div>
        </div>
    );
}

export default Footer;
