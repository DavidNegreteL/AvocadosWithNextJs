import react, {useState, useEffect} from "react";
import { useRouter } from 'next/router';
import { ProductSummary } from "../../components/ProductSummary/ProductSummary";

const ProductItem = () => {
    const [product, setProduct] = useState();
    const router = useRouter();
    const id = router.query.id;

    useEffect(() => {
        if(id){
            window.fetch(`/api/avo/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
        }
    }, [id]);

    return (
        product && (
            <ProductSummary product={product}/>
        )
    );
};

export default ProductItem;