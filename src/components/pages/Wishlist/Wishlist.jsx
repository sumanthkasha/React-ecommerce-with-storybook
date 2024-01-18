import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

import { ProductCard } from "../../../stories/molecules/Card/Card";
import './Wishlist.scss';

export default function Wislist() {
    const state = useSelector((state) => state);
    const [wishlistProducts, setWishlistProducts] = useState([]);

    useEffect(() => {
        if (state.wishlist.wishlistData && state.productData.data) {
            const products = state.productData.data.filter((element) => (
                state.wishlist.wishlistData.includes(element.id.toString())
            ));
            setWishlistProducts(products);
        }
    }, [state.wishlist.wishlistData, state.productData.data]);


    console.log(wishlistProducts);

    return (
        <section>
            {/* <Link to=".." relative="path">Go back</Link> */}
            
            {
                wishlistProducts &&
                <ul className="cmp-wishlist d-flex">
                    {wishlistProducts.map((product) => (
                        <li key={product.id} className="cmp-wishlist__item">
                            <ProductCard 
                                image={"/images/"+product.image} 
                                brand_name={product.brand_name} 
                                description={product.description}
                                price={product.price}
                                discount={product.discount}
                            />
                        </li>
                    ))}
                </ul>
            }
        </section>
    )
}