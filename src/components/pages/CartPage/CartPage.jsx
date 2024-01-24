import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ProductCard } from "../../../stories/molecules/Card/Card";
import { QuantityCounter } from '../../../stories/atoms/Counter/QuantityCounter';
import './CartPage.scss'

const CartPage = () => {
    const state = useSelector((state) => state);
    const [cartProducts, setCartlistProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(() => {
        if (state.cart.cartData && state.productData.data) {
            const products = state.productData.data.filter((element) => (
                state.cart.cartData.includes(element.id.toString())
            ));
            setCartlistProducts(products);
        }
    }, [state.cart.cartData, state.productData.data]);

    useEffect(() => {
        const defaultSelectedProducts = cartProducts.map((product) => ({
          id: product.id,
          price: product.price,
        }));
    
        setSelectedProducts(defaultSelectedProducts);
    }, [cartProducts]);

    const handleCheckboxChange = (product) => {
        const isSelected = selectedProducts.some((selectedProduct) => selectedProduct.id === product.id);
    
        if (isSelected) {
          setSelectedProducts((prevSelected) => prevSelected.filter((p) => p.id !== product.id));
        } else {
          setSelectedProducts((prevSelected) => [...prevSelected, { id: product.id, price: product.price }]);
        }
    };

    return (
        <section className="cmp-cart-container">
            {cartProducts.length > 0 ?
                (
                    <>
                        <h1 className="cmp-cart__title">Shopping Cart</h1>
                        <ul className="cmp-cart d-flex flex-column">
                            {cartProducts.map((product) => (
                                <li key={product.id} className="cmp-cart__item" >
                                    <input 
                                        type="checkbox" 
                                        name="checkoutProducts" 
                                        className="cmp-cart__checkbox"
                                        checked={selectedProducts.some((selectedProduct) => selectedProduct.id === product.id)}
                                        onChange={() => handleCheckboxChange(product)} 
                                    />
                                    {/* <Link to= >  */}
                                        <ProductCard
                                            image={product.image}
                                            brand_name={product.brand_name}
                                            description={product.description}
                                            price={product.price.toString()}
                                            discount={product.discount}
                                            addToCartButton={false}
                                            counter={true}
                                            className="w-100 cmp-cart__link--product-page"
                                            linkTo = {`/productDetails/${product.type}/${product.id}`}
                                        />
                                    {/* </Link> */}
                                    
                                </li>
                            ))}
                        </ul>
                        <div className="cmp-cart__subtotal">
                            <h2 className="cmp-cart__subtotal-text px-1">Subtotal</h2>
                            <span className="cmp-cart__subtotal-text">
                                ({selectedProducts.length + " item"}): <span className="cmp-cart__rupee-icon">&#8377;</span> 
                                <span className="cmp-cart__total-price"> {selectedProducts.reduce((sum, ele) => sum + ele.price, 0)} </span> 
                            </span>
                            <Link to="#" className="cmp-cart__proceed-to-buy" >Proceed to Buy</Link>
                        </div>
                    </>
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