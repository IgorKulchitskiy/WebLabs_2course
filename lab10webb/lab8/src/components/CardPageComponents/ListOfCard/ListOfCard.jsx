import React from 'react'
import Card from '../Card/Card.jsx';
import './ListOfCard.css';
import TemplateButtons from '../../Buttons/TemplateButtons/TemplateButtons.jsx';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

function ListOfCard() {
    const cart = useSelector((state) => state.cart);
    const totalPrice = cart.reduce((total, item) => total + item.max_speed * item.quantity, 0);

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/catalog');
    }

    if (totalPrice === 0)
        return (
            <>
                <h1 className='empty'>You didn not added any heli man</h1>
                <div className='navButtonsCart'>
                    <TemplateButtons id = 'sort_by_of_pricee' type = 'Back to catalog' onClick={handleNavigate} />
                    <TemplateButtons id = 'sort_by_of_price' type = 'Continue' />
                </div>
            </>
        )

  return (
    <>
        <h1>Shopping Cart</h1>
        <div className="obhortka">
            {cart.map((item) => (
                <Card key={item.id} heli={item} />
            ))}
        </div>
        <p className='priceTotal'>Total speed: {totalPrice} km\h</p>
        <div className='navButtonsCart'>
            <TemplateButtons id = 'sort_by_of_pricee' type = 'Back to catalog' onClick={handleNavigate} />
            <TemplateButtons id = 'sort_by_of_price' type = 'Continue' />
        </div>
    </>
  )
}

export default ListOfCard