import React from "react";
import { useParams } from "react-router-dom";
import { heli } from "../data/dataCatalog";
import Price from "../components/ItemPageComponents/PriceSection/PriceSection";
import MainSection from "../components/ItemPageComponents/MainSection/MainSection";

function ItemPage() {
    const { id } = useParams();
    const helicopter = heli.find(h => h.id === parseInt(id));

    return (
        <div>
            <MainSection 
                name={helicopter.name}
                passenger_capacity={helicopter.passenger_capacity}
                material={helicopter.material}
            />
            <Price max_speed={helicopter.max_speed} />
        </div>
    );
}

export default ItemPage;
