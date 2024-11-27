import React from 'react';
import './ButtonViewMore.css'


function ButtonViewMore(props) {
  return (
    <div id = {props.div} className="button-container">
        <button type = {props.name} id = {props.btn} onClick = {props.onClick} className='viewMoreBtn'>{props.name} more</button>
  </div>
  );
}

export default ButtonViewMore;