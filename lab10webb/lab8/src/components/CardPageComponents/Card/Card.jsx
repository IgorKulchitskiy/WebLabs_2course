import React from 'react'
import './Card.css';
import Helicopter from "../../../images/helicopter.jpg"
import TemplateButtons from '../../Buttons/TemplateButtons/TemplateButtons';
import { useDispatch } from 'react-redux';
import { increment, decrement, removeFromCart } from '../../../cardRedux/actions.js';

function Card(props) {
    const dispatch = useDispatch();

    const handleIncrement = () => {
      dispatch(increment(props.heli.id, props.heli.max_speed));
    };

    const handleDecrement = () => {
      dispatch(decrement(props.heli.id, props.heli.max_speed));
    };

    const handleRemove = () => {
      dispatch(removeFromCart(props.heli.id, props.heli.max_speed));
    };

  return (
    <div class="card_of_tree_cart">
        <img src={Helicopter} alt="Heli" className="place_for_img_cart" />
        <div className='carrtInfo'>
            <div className='blocc'>
                <h4>Виробник: {props.heli.manufacturer_name}</h4>
                <p>Швидкість: {props.heli.max_speed} km/h</p>
            </div>
            <p className='plusminus'> 
                <TemplateButtons onClick={handleDecrement} id = 'plusminus' type = '-' />
                {props.heli.quantity}
                <TemplateButtons onClick={handleIncrement} id = 'plusminus' type = '+' />
            </p>
            <div className='priceANDdelete'>
                <p className='prr'>{props.heli.max_speed} km/h</p>
                <TemplateButtons onClick={handleRemove} id = 'plusminus' type = '&times;' />
            </div>
        </div>
    </div>
  )
}

export default Card