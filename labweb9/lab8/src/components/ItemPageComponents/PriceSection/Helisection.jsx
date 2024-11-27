import React from "react";
import TemplateButtons from "../../Buttons/TemplateButtons/TemplateButtons.jsx";
import './Helisection.css';
import ButtonGoBack from "../ButtonGoBack/ButtonGoBack";

function Helisection(props) {
    return (
        <div className="priceWrapper">
            <p className="price">Speed: {props.max_speed} Km/h</p>
            <div className="btns">
                <ButtonGoBack />
                <TemplateButtons id = 'sort_by_of_price' type = 'Add to cart' />
            </div>
        </div>
    );
}

export default Helisection;
