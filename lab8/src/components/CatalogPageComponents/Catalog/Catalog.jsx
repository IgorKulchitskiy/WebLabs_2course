import React from 'react';
import "./Catalog.css";
import Card from "../Card/Card.jsx";

function Catalog(props) {
    return (
        <>
            <div className="wrapper">
                {props.helis.map((heli) => (
                    <Card key={heli.id} heli={heli} />
                ))}
            </div>
        </>

    );
}

export default Catalog;
