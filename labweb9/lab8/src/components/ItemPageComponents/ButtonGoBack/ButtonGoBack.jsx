import React from "react";
import './ButtonGoBack.css';
import { useNavigate } from "react-router-dom";

function ButtonGoBack() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(-1);
    }

    return (
        <button className="gobackbtn" onClick={handleNavigate}> Go back </button>
    );
}

export default ButtonGoBack;
