import React from "react";
import './MainSection.css';
import Tree from '../../../images/helicopter.jpg';

function MainSection(props) {
    return (
        <div className="mainsection">
            <img src={Tree} alt='tree' className="treeimg"/>
            <div className="description">
                <h2 className="mainDesc">Якісний Гелікоптер {props.manufacturer_name}</h2>
                <p className="moreInfo">Чудовий Гелікоптер від укр розробників.</p>
                <div className="height_material">
                    <div>
                        <p>Висота в см</p>
                        <select id="sort_by_price">
                            <option value="">{props.passenger_capacity}</option>
                            <option value="">200</option>
                            <option value="">230</option>
                        </select>
                    </div>
                    
                    <div>
                        <p>Матеріал</p>
                        <select id="sort_by_price">
                            <option value="">{props.material}</option>
                            <option value="">PP</option>
                            <option value="">PVE</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSection;
