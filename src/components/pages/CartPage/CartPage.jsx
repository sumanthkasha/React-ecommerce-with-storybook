import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart,removeProductFromCart } from "../../../redux/slice/productDataSlice";
import { Link } from "react-router-dom";

import { ProductCard } from "../../../stories/molecules/Card/Card";
import { Button } from "../../../stories/atoms/Button/Button";
import './CartPage.scss'

const CartPage = () => {
    const state = useSelector((state) => state);
    const [cartProducts, setCartlistProducts] = useState([]);

    useEffect(() => {
        if (state.cart.cartData && state.productData.data) {
            const products = state.productData.data.filter((element) => (
                state.cart.cartData.includes(element.id.toString())
            ));
            setCartlistProducts(products);
        }
    }, [state.cart.cartData, state.productData.data]);

    console.log(cartProducts);

    return (
        <section className="cmp-cart-container">
            {cartProducts.length > 0 ?
                (
                    <ul className="cmp-cart d-flex">
                        {cartProducts.map((product) => (
                            <li key={product.id} className="cmp-cart__item" >
                                <ProductCard
                                    image={product.image}
                                    brand_name={product.brand_name}
                                    description={product.description}
                                    price={product.price}
                                    discount={product.discount}
                                    addToCartButton={false}
                                />
                                <Button className="cmp-cart__buy-now" >
                                    <Link to="/" >Buy Now</Link>
                                </Button>
                            </li>
                        ))}
                    </ul>

                ) :
                (
                    <section className="cmp-cart__empty">
                        <h2 className="cmp-cart__text">Your Cart is empty.</h2>
                        <Link to={"/collections/tshirt"} className="cmp-cart__link"> Continue Shopping</Link>
                    </section>
                )
                                        
            }
        </section>
    )
}

export default CartPage;