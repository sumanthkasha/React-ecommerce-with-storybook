import React, { useState, useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";
import { Link } from "react-router-dom";

import { Button } from "../../../stories/atoms/Button/Button";
import { ProductCard } from "../../../stories/molecules/Card/Card";
import { FaArrowLeft } from "react-icons/fa6";

import { removeProduct, addProductToCart } from "../../../redux/slice/productDataSlice";
import { defaultCollections } from "../../../assets/utility";
import './Wishlist.scss';

export default function Wislist() {
    const state = useSelector((state) => state);
    const { data } = state.productData;
    const { wishlistData } = state.wishlist;
    
    const dispatch = useDispatch();
    const [wishlistProducts, setWishlistProducts] = useState([]);

    useEffect(() => {
        if (wishlistData && wishlistData.length > 0 && data && data.length > 0) {
            const products = data.filter((element) => (
                wishlistData.includes(element.id.toString())
            ));
            setWishlistProducts(products);
        }
    }, [wishlistData, data]);

    console.log(wishlistData);

    const handleUpdateCart = (productId) => {
        dispatch(addProductToCart(productId.toString()));
        dispatch(removeProduct(productId.toString()));
    };
    
    return (
        <section className="cmp-wishlist-container">
            {
                data && wishlistProducts.length > 0 && wishlistData.length > 0
                ?
                <>
                    <Link to={"/collections/tshirt"} className="cmp-cart__link mb-4"> <FaArrowLeft /> Continue Shopping</Link>
                
                    <ul className="cmp-wishlist d-flex">
                        {wishlistProducts.map((product) => (
                            <li key={product.id} className="cmp-wishlist__item">
                                <ProductCard 
                                    image={product.image} 
                                    brand_name={product.brand_name} 
                                    description={product.description}
                                    price={product.price.toString()}
                                    discount={product.discount}
                                    linkTo = {`/productDetails/${product.type}/${product.id}`}
                                />
                                <Button
                                    className="cmp-wishlist__cart"
                                    onClick={() =>  handleUpdateCart(product.id)}
                                >
                                    Add to cart
                                </Button>
                                
                            </li>
                        ))}
                    </ul>
                </>
                :
                <section className="cmp-wishlist__empty">
                    <h1 className="cmp-wishlist__text">Wishlist is empty</h1>
                    <Link to={defaultCollections} relative="path"className="cmp-wishlist__link">Go to Collections</Link>
                </section>
            }
        </section>
    )
}