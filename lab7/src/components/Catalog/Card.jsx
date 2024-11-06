import React from "react";
import heli from "../../images/helicopter.jpg"
import "./Catalog.css";

function Card(props) {
    return (
        <div class="card_of_heli">
            <img src={heli} alt="Helicopter" class="place_for_img"></img>
            <h4>Виробник {props.helis.name}</h4>
            <p>Capacity: {props.helis.passenger_capacity} peop.</p>
            <p>Max Speed: {props.helis.max_speed} Km/h </p> 
            <p>Material: {props.helis.material}</p>
            <div class="heli_edit_delete">
                {/* <button class="edit_button" data-id={item.id}>Edit</button>
                <button class="delete_button" data-id={item.id}>Delete</button> */}
            </div>
        </div>
    );
}

export default Card;