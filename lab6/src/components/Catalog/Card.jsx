import React from "react";
import heli from "../../images/helicopter.jpg"
import "./Catalog.css";

function Card(props) {
    return (
        <div class="card_of_tree">
            <img src={heli} alt="Helicopter" class="place_for_img"></img>
            <h4>Виробник {props.Heli.name}</h4>
            <p>Capacity: {props.Heli.passenger_capacity} peop.</p>
            <p>Max Speed: {props.Heli.max_speed} Km/h </p> 
            <p>Material: {props.Heli.material}</p>
            <div class="tree_edit_delete">
                {/* <button class="edit_button" data-id={item.id}>Edit</button>
                <button class="delete_button" data-id={item.id}>Delete</button> */}
            </div>
        </div>
    );
}

export default Card;