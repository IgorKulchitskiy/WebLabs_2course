import React from "react";
import Helicopter from "../../../images/helicopter.jpg"
import "./Card.css";
import { NavLink } from "react-router-dom";
import ButtonViewMore from "../../Buttons/ButtonViewMore/ButtonViewMore.jsx";

function Card(props) {
    return (
        <div class="card_of_heli">
            <img src={Helicopter} alt="Helicopter" className="place_for_img" />
            <h4>Виробник: {props.heli.manufacturer_name}</h4>
            <p>Passanger Capacity: {props.heli.passenger_capacity} People</p>
            <p>Max Speed: {props.heli.max_speed} Km/h</p>
            <p>Material: {props.heli.material}</p>
            <NavLink to={`/heli/${props.heli.id}`} className='bot'>
                <ButtonViewMore div = 'viewbtn' btn = 'viewmorebtn' name = 'View'/>
            </NavLink>
        </div>
    );
}

export default Card;
