import React from "react";
import InputFind from "./InputFind";
import './operation.css';
import ButtonFSR from "./ButtonFRS";
import Select from "./Select";

function Crude() {
    return (
        <div className="operationWrapper">
            <div className="findReset">
                <h3>Enter the manufacturer of the Heli</h3>
                <div className="inputFindResetButtons">
                    <InputFind />
                    <div className="findResetButtons">
                        <ButtonFSR id = 'find_button' type = 'Find' />
                        <ButtonFSR id = 'reset_button' type = 'Reset' />
                    </div>
                </div>
            </div>

            <div className="sortWrapper">
                <h3>Sort by capacity</h3>
                <Select />
            </div>

        </div>
    );
}

export default Crude;
