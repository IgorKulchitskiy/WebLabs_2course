import React from "react";
import './MainSection.css';
import Heli from '../../../images/helicopter.jpg';

function MainSection(props) {
    return (
        <div className="mainsection">
            <img src={Heli} alt='tree' className="treeimg"/>
            <div className="description">
                <h2 className="mainDesc">Шикарний Вертоліт Від Укр Виробників {props.name}</h2>
                <p className="moreInfo">Легкозбірний та Супер Моторний Вертоліт</p>
                <div className="height_material">
                    <div>
                        <p>Макс Швидкість</p>
                        <select id="sort_by_price">
                            <option value="">{props.max_speed}</option>
                            <option value="">999</option>
                            <option value="">777</option>
                        </select>
                    </div>
                    
                    <div>
                        <p>Матеріал</p>
                        <select id="sort_by_price">
                            <option value="">Stal</option>
                            <option value="">Iron</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSection;
