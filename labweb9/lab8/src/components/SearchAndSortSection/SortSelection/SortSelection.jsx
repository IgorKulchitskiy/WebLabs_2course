import React from "react";
import './SortSelection.css';

function SortSelection({ onChange, sortType }) {
    return (
        <div className="sortWrapper">
            <h3>Sort by</h3>
            <div className="sortButtons">
                <select id="sort_by_price" onChange={onChange} value={sortType}>
                    <option value="">Choose your sorting</option>
                    <option value="max_speed_asc">Sort by speed increase</option>
                    <option value="max_speed_desc">Sort by speed decrease</option>
                    <option value="passenger_capacity_asc">Sort by passanger capacity increase</option>
                    <option value="passenger_capacity_desc">Sort by passanger capacity decrease</option>
                </select>
            </div>
        </div>  
    );
}

export default SortSelection;
