import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../cardRedux/actions.js";
import { getHeliById } from "../api";
import Speed from "../components/ItemPageComponents/PriceSection/Helisection";
import MainSection from "../components/ItemPageComponents/MainSection/MainSection";
import Loader from "../components/Loader/Loader";

function ItemPage() {
    const { id } = useParams();
    const [helis, setHelis] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectQuantity, setSelectQuantity] = useState(1);
    const [selectedSpeed, setSelectedSpeed] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTree = async () => {
            try {
                setLoading(true)
                const fetchedTree = await getHeliById(id);
                setHelis(fetchedTree[id-5]);
            } finally {
                setTimeout(() => {
                    setLoading(false)
                  }, 150)
            }
        };

        fetchTree();
    }, [id]);

    const handleAddToCart = () => {
        const cartItem = {
            id: helis.id,
            manufacturer_name: helis.manufacturer_name,
            max_speed: selectedSpeed == null ? helis.max_speed : selectedSpeed,
            quantity: Number(selectQuantity),
        };
        dispatch(addToCart(cartItem));
        alert('You added a heli to cart')
    };

    if (loading) return <Loader loading={loading} />;

    return (
        <div>
            <MainSection 
                manufacturer_name={helis.manufacturer_name} 
                max_speed={helis.max_speed} 
                selectedSpeed={selectedSpeed}
                setSelectedSpeed={setSelectedSpeed}
                selectQuantity={selectQuantity}
                setSelectQuantity={setSelectQuantity}
            />
            <Speed max_speed={selectedSpeed == null ? helis.max_speed : selectedSpeed} onAddToCart={handleAddToCart}/>
        </div>
    );
}

export default ItemPage;