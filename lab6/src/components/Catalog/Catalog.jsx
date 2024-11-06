import React from "react";
import heli from "../../images/helicopter.jpg"
import "./Catalog.css";
import Card from "./Card";

function Catalog(props) {
    return (
        <div className="wrapper">
            {props.Helis.map((heli) => (
                <Card Heli = {heli}/>
            ))}
        </div>
    );
}

export default Catalog;
