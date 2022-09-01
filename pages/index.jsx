import react, {useEffect, useState} from "react";
import {HomeHeader} from "../components/HomeHeader/HomeHeader";
import { ProductGrid } from "../components/ProductGrid/ProductGrid";
import { ProductCard } from "../components/ProductCard/ProductCard";

const Home = () => {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        window.fetch('api/avo')
        .then((response) => response.json())
        .then(({data, dataLength}) => {
            setProductList(data);
        });
    }, []);
    return (
        <>
            <HomeHeader/>
            <ProductGrid>
                {
                    productList.map((product, index) => (
                        <ProductCard
                            cardId={product.id}
                            cardImg={product.image}
                            cardTitle={product.name}
                            cardDescription={`$${product.price} USD`}
                            key={product.id}
                        />
                    ))
                }
            </ProductGrid>
        </>
    );
};

export default Home;