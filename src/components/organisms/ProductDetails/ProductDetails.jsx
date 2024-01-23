import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { QuantityCounter } from "../../../stories/atoms/Counter/QuantityCounter";
import { Button } from "../../../stories/atoms/Button/Button";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaAngleLeft } from "react-icons/fa6";

import {
  addProduct,
  removeProduct,
  addProductToCart
} from "../../../redux/slice/productDataSlice";
import "./ProductDetails.scss";

export default function ProductDetails() {
  const params = useParams();
  const { data } = useSelector((state) => state.productData);
  const [quantity, setQuantity] = useState(1);
  const [wishlistData, setWishListData] = useState({});
  const [cartData, setCartData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    //wishlist
    for (const productId in wishlistData) {
        if (wishlistData.hasOwnProperty(productId)) {
            const status = wishlistData[productId];
            if (status === "add") {
              dispatch(addProduct(productId));
            } else if (status === "remove") {
              dispatch(removeProduct(productId));
            }
        }
    }

    //cart
    for (const productId in cartData) {
        if (cartData.hasOwnProperty(productId)) {
          const status = cartData[productId];
          if (status === "add") {
              dispatch(addProductToCart(productId));
          }
        }
    }
  }, [wishlistData, cartData, dispatch]);

  const handleUpdateWishlist = (productId) => {
    setWishListData((prevWishlistData) => {
      const newStatus =
        prevWishlistData[productId] === "add" ? "remove" : "add";
      return {
        ...prevWishlistData,
        [productId]: newStatus,
      };
    });
  };

  const handleUpdateCart = (productId) => {
    setCartData((prevCartData) => {
      return {
        ...prevCartData,
        [productId]: "add",
      };
    });
  };

  function calculateActualPrice(discountedPrice, discountPercentage) {
    if (Number(discountedPrice) < 0 || Number(discountPercentage < 0) || Number(discountPercentage > 100)) {
      return "Invalid input. Please provide valid values.";
    }
  
    return Math.round(Number(discountedPrice) / (1 - Number(discountPercentage) / 100));
  }

  const ProductDescription = (product) => {
    return (
      <div className="product-details__container d-flex flex-column">
        <Link to={`/collections/${params.productType}`} className="product-details__back-btn" relative="path">
          <FaAngleLeft /> back
        </Link>
        <section className="product-details__wrapper">
          <div className="product-image">
            <img src={`/images/${product.image}`} alt={product.brand_name} />
          </div>
          <div className="product-info">
            <h1 className="product-title">{product.brand_name}</h1>
            <p className="product-description">{product.description}</p>
            <span className="product__discount"> -{product.discount} </span>
            <span className="product__price"> <span>&#8377;</span> {product.price}</span>
            <h3 className="product__mrp-wrapper"> M.R.P.:  <span className="product__mrp">&#8377; {calculateActualPrice(product.price, product.discount.slice(0, 1))}</span> </h3>
            {/* <h3> {product.popularity} </h3> */}
            {/* <QuantityCounter
              initialValue={quantity}
              onIncrement={(newQuantity) => setQuantity(newQuantity)}
              onDecrement={(newQuantity) => setQuantity(newQuantity)}
              className="quantity-counter"
            /> */}
            <Button
              className="wishlist-button"
              onClick={() => handleUpdateWishlist(product.id)}
            >
              {wishlistData[product.id.toString()] === "remove" ||
              !wishlistData[product.id] ? (
                <CiHeart />
              ) : (
                <FaHeart />
              )}{" "}
              Wishlist
            </Button>

            {cartData[product.id.toString()] === "remove" ||
              !cartData[product.id]
                ? <Button className="cart-button" onClick={() => handleUpdateCart(product.id)}> Add to Cart </Button>
                : <Button className="cart-button"> <Link to="/cart" relative="path"> Go to Cart</Link> </Button>}
            
            

            <div className="product__details">
              <h2 className="product__details-title">Product Details</h2>
              <table>
                <tr>
                  <td className="product__details-heading">Brand Name</td>
                  <td className="px-2"> {product.brand_name} </td>
                </tr>
                <tr>
                  <td className="product__details-heading">Description</td>
                  <td className="px-2"> {product.description} </td>
                </tr>
                <tr>
                  <td className="product__details-heading">Rating</td>
                  <td className="px-2"> {product.popularity}/10 </td>
                </tr>
                <tr>
                  <td className="product__details-heading">Country of origin</td>
                  <td className="px-2"> India </td>
                </tr>
              </table>
            </div>
          </div>

        </section>
      </div>
    );
  };

  return (
    <section>
      {data &&
        ProductDescription(
          data.find(
            (element) =>
              element.type === params.productType &&
              element.id == params.productId
          )
        )}
    </section>
  );
}
