import React from "react";
import './InputFind.css';

function InputFind(props) {
    return (
        <input 
            id={props.id} 
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}  
            onChange={props.onChange}
            min={props.min}
        />
    );
}

export default InputFind;