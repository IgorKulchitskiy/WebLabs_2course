import React from "react";
import "./Catalog.css";
import Card from "./Card";

function Catalog(props) {
    return (
        <div className="wrapper">
            {props.helis.map((heli) => (
                <Card helis = {heli}/>
            ))}
        </div>
    );
}

export default Catalog;
