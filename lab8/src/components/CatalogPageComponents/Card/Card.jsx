import React from "react";
import Helis from "../../../images/helicopter.jpg";
import "./Card.css";
import { NavLink } from "react-router-dom";
import ButtonViewMore from "../../Buttons/ButtonViewMore/ButtonViewMore.jsx";

function Card(props) {
    return (
        <div className="card_of_heli">
            <img src={Helis} alt="helicopter" className="place_for_img" />
            <h4>Manufacturer: {props.heli.name}</h4>
            <p>Passenger capacity: {props.heli.passenger_capacity}</p>
            <p>Max Speed: {props.heli.max_speed} km/h</p>
            <p>Material: {props.heli.material}</p>
            <NavLink to={`/heli/${props.heli.id}`} className='bot'>
                <ButtonViewMore div='viewbtn' btn='viewmorebtn' name='View' />
            </NavLink>
        </div>
    );
}

export default Card;
