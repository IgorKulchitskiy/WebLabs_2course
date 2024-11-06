import React from "react";
import './operation.css';

function ButtonFSR(props) {
    return (
        <>
            <button id={props.id} type="button">{props.type}</button>
        </>
    );
}

export default ButtonFSR;