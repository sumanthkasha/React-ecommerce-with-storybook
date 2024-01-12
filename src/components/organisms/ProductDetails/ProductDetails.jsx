import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export default function ProductDetails() {
    const params = useParams();
    const { data } = useSelector((state) => state.productData);

    const ProductDescription = (data, productType, productId) => {
        const product = data.filter((element) => (
            element.type === productType && element.id == productId
        ));
          
        return (
            <div>
                <div>{product[0].id}</div>
                <div>{product[0].type}</div>
                <div>{product[0].image}</div>
                <img src={"/images/"+product[0].image} alt="product" />
            </div>
        )
    }

    return (
        <section>
            <Link to={`/collections/${params.productType}`} relative="path">Go back</Link>
            
            {
                data && ProductDescription(data, params.productType, params.productId)
            }
        </section>
    )
}