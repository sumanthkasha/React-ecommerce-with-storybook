import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ProductCard } from "../../../stories/molecules/Card/Card";
import './Wishlist.scss';

export default function Wislist() {
    const state = useSelector((state) => state);
    const [wishlistProducts, setWishlistProducts] = useState([]);

    // const [wishlistProducts, setWishlistProducts] = useState(
    //     JSON.parse(localStorage.getItem('wishlistData')) || []
    // );

    useEffect(() => {
        if (state.wishlist.wishlistData && state.wishlist.wishlistData.length > 0 && state.productData.data && state.productData.data.length > 0) {
            const products = state.productData.data.filter((element) => (
                state.wishlist.wishlistData.includes(element.id.toString())
            ));
            setWishlistProducts(products);
        }
    }, [state.wishlist.wishlistData, state.productData.data]);


    return (
        <section className="cmp-wishlist-container">
            
            {
                state.productData.data && wishlistProducts.length>0
                ?
                <ul className="cmp-wishlist d-flex">
                    {wishlistProducts.map((product) => (
                        <li key={product.id} className="cmp-wishlist__item">
                            <ProductCard 
                                image={product.image} 
                                brand_name={product.brand_name} 
                                description={product.description}
                                price={product.price}
                                discount={product.discount}
                                
                            />
                        </li>
                    ))}
                </ul>
                :
                <section className="cmp-wishlist__empty">
                    <h1 className="cmp-wishlist__text">Wishlist is empty</h1>
                    <Link to="/collections/tshirt" relative="path"className="cmp-wishlist__link">Go to Collections</Link>
                </section>
            }
        </section>
    )
}