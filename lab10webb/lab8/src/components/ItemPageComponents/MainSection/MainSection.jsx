import React from "react";
import './MainSection.css';
import Heli from '../../../images/helicopter.jpg';
import InputFind from "../../SearchAndSortSection/InputFind/InputFind";

function MainSection({manufacturer_name, max_speed, selectedSpeed, setSelectedSpeed, selectQuantity, setSelectQuantity}) {

    return (
        <div className="mainsection">
            <img src={Heli} alt='tree' className="treeimg"/>
            <div className="description">
                <h2 className="mainDesc">Шикарний Вертоліт Від Укр Виробників {manufacturer_name}</h2>
                <p className="moreInfo">Легкозбірний та Супер Моторний Вертоліт</p>
                <div className="height_material">
                    <div>
                        <p>Макс Швидкість</p>
                        <select
                            id="sort_by_price"
                            value={selectedSpeed}
                            onChange={(e) => setSelectedSpeed(e.target.value)}
                        >
                            <option value={max_speed}>{max_speed}</option>
                            <option value='600'>600</option>
                            <option value='700'>700</option>
                        </select>
                    </div>
                    
                    <div className="ItemInfoSelection">
                        <p>Кількість helis</p>
                        <InputFind 
                            id="find_input" 
                            type="number"
                            placeholder="Enter amount of helis"
                            min={1}
                            value={selectQuantity}
                            onChange={(e) => setSelectQuantity(Number(e.target.value))}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSection;
