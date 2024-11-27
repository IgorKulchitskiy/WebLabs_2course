import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getHeliById } from "../api";
import Speed from "../components/ItemPageComponents/PriceSection/Helisection";
import MainSection from "../components/ItemPageComponents/MainSection/MainSection";
import Loader from "../components/Loader/Loader";

function ItemPage() {
    const { id } = useParams();
    const [helis, setHelis] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTree = async () => {
            try {
                setLoading(true)
                const fetchedTree = await getHeliById(id);
                setHelis(fetchedTree);
            } finally {
                setTimeout(() => {
                    setLoading(false)
                  }, 150)
            }
        };

        fetchTree();
    }, [id]);

    if (loading) return <Loader loading={loading} />;

    return (
        <div>
            <MainSection 
                manufacturer_name={helis.manufacturer_name} 
                max_speed={helis.max_speed} 
                material={helis.material}
            />
            <Speed max_speed={helis.max_speed} />
        </div>
    );
}

export default ItemPage;