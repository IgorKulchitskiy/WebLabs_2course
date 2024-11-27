import React from "react";
import './TemplateButtons.css';

function TemplateButtons(props) {
    return (
        <>
            <button id={props.id} type="button" onClick = {props.onClick}>{props.type}</button>
        </>
    );
}

export default TemplateButtons;