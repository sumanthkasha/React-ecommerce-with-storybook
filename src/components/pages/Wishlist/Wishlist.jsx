import React, { useState, useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";
import { Link } from "react-router-dom";

import { Button } from "../../../stories/atoms/Button/Button";
import { ProductCard } from "../../../stories/molecules/Card/Card";

import { addProductToCart } from "../../../redux/slice/productDataSlice";
import { defaultCollections } from "../../../assets/utility";
import './Wishlist.scss';

export default function Wislist() {
    const state = useSelector((state) => state);
    const { data } = state.productData;
    const { wishlistData } = state.wishlist;
    
    const dispatch = useDispatch();
    const [wishlistProducts, setWishlistProducts] = useState([]);
    const [cartData, setCartData] = useState({});

    useEffect(() => {
        if (wishlistData && wishlistData.length > 0 && data && data.length > 0) {
            const products = data.filter((element) => (
                wishlistData.includes(element.id.toString())
            ));
            setWishlistProducts(products);
        }
    }, [wishlistData, data]);

    useEffect(() => {
        for (const productId in cartData) {
            if (cartData.hasOwnProperty(productId)) {
              const status = cartData[productId];
              if (status === "add") {
                  dispatch(addProductToCart(productId));
              }
            }
        }
      }, [wishlistData, cartData, dispatch]);

    const handleUpdateCart = (productId) => {
        setCartData((prevCartData) => {
          return {
            ...prevCartData,
            [productId]: "add",
          };
        });
      };
    
    return (
        <section className="cmp-wishlist-container">
            
            {
                data && wishlistProducts.length>0
                ?
                <ul className="cmp-wishlist d-flex">
                    {wishlistProducts.map((product) => (
                        <li key={product.id} className="cmp-wishlist__item">
                            <ProductCard 
                                image={product.image} 
                                brand_name={product.brand_name} 
                                description={product.description}
                                price={product.price.toString()}
                                discount={product.discount}
                                
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
                :
                <section className="cmp-wishlist__empty">
                    <h1 className="cmp-wishlist__text">Wishlist is empty</h1>
                    <Link to={defaultCollections} relative="path"className="cmp-wishlist__link">Go to Collections</Link>
                </section>
            }
        </section>
    )
}