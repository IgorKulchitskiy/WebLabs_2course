import React from "react";
import './InputFind.css';

function InputFind(props) {
    return (
        <input 
            id={props.id} 
            type={props.text}
            placeholder={props.placeholder}
            value={props.value}  
            onChange={props.onChange}
        />
    );
}

export default InputFind;