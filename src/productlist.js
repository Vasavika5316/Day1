import { useEffect, useState } from "react";
import { ProductCard } from "./productcard.js";

export function ProductList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchMyData = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const resData = await res.json();
            setData(resData);
        };
        fetchMyData();
    }, [data]);
    return (
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {data.map((dataItem, index) => (
                    <ProductCard
                        key={index}
                        id={dataItem.id}
                        title={dataItem.title}
                        category={dataItem.category}
                        // description={dataItem.description}
                        image={dataItem.image}
                        price={dataItem.price}
                        rating={dataItem.rating}
                    />
                ))}
            </div>
        </div>
    );
}
