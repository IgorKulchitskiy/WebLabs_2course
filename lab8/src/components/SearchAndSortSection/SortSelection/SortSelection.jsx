import React from "react";
import './SortSelection.css';

function SortSelection(props) {
    return (
        <div className="sortWrapper">
            <h3>Sort by</h3>
            <div className="sortButtons">
                <select id="sort_by_price" onChange={props.onChange}>
                    <option value="">Choose your sorting</option>
                    <option value="increase_price">Sort by price increase</option>
                    <option value="decrease_price">Sort by price decrease</option>
                    <option value="increase_height">Sort by height increase</option>
                    <option value="decrease_height">Sort by height decrease</option>
                </select>
            </div>
        </div>  
    );
}

export default SortSelection;
