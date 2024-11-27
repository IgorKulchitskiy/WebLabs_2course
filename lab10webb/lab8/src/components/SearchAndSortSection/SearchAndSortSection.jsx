import React from "react";
import './SearchAndSortSection.css';
import TemplateButtons from '../Buttons/TemplateButtons/TemplateButtons.jsx';
import InputFind from "./InputFind/InputFind.jsx";
import SortSelection from "./SortSelection/SortSelection.jsx";

function SearchAndSortSection({ searchValue, 
                                setSearchValue, 
                                handleReset,
                                setSortType,
                                sortType
                            }) {

    const onResetClick = () => {
        handleReset();
    };

    const handleSortChange = (e) => {
        const sortType = e.target.value
        setSortType(sortType);
    };

    return (
        <div className="operationWrapper">

            <div className="findReset">
                <h3>Enter the manufacturer of Helicopter</h3>
                <div className="inputFindResetButtons">
                    <InputFind 
                        id="find_input" 
                        type="text" 
                        placeholder="Enter manufacturer" 
                        value={searchValue}  
                        onChange={(e) => setSearchValue(e.target.value)}
                    />

                    <TemplateButtons 
                        id='reset_button' 
                        type='Reset' 
                        onClick={onResetClick} 
                    />
                </div>
            </div>

            <SortSelection 
                onChange = {handleSortChange}
                sortType={sortType}
            />
        </div>
    );
}

export default SearchAndSortSection;
