import React from 'react';
import "./Catalog.css";
import Card from "../Card/Card.jsx";

function Catalog({ trees }) {
    return (
        <>
            <div className="wrapper">
                {trees.map((heli) => (
                    <Card key={heli.id} heli={heli} />
                ))}
            </div>
        </>

    );
}

export default Catalog;
