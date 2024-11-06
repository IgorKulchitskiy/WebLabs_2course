import React from "react";

function Select() {
    return (
        <div className="sortButtons">
            <select id="sort_by_price">
                <option value="">Sort by capacity</option>
                <option value="increase">Increase</option>
                <option value="decrease">Decrease</option>
            </select>
        </div>
    );
}

export default Select;