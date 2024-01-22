import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { QuantityCounter } from "../../../stories/atoms/Counter/QuantityCounter";
import { Button } from "../../../stories/atoms/Button/Button";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import {
  addProduct,
  removeProduct,
} from "../../../redux/slice/productDataSlice";
import "./ProductDetails.scss";

export default function ProductDetails() {
  const params = useParams();
  const { data } = useSelector((state) => state.productData);
  const [quantity, setQuantity] = useState(1);
  const [wishlistData, setWishListData] = useState({});
  const [cartData, setCartData] = useState({});
  const dispatch = useDispatch();

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

  const ProductDescription = (product) => {
    return (
      <div className="product-details-container">
        <div className="product-image">
          <img src={`/images/${product.image}`} alt={product.brand_name} />
        </div>
        <div className="product-info">
          <Link to={`/collections/${params.productType}`} relative="path">
            Go back
          </Link>
          <div className="product-title">{product.brand_name}</div>
          <div className="product-price">&#8377; {product.price}</div>
          <div className="product-description">{product.description}</div>
          <QuantityCounter
            initialValue={quantity}
            onIncrement={(newQuantity) => setQuantity(newQuantity)}
            onDecrement={(newQuantity) => setQuantity(newQuantity)}
            className="quantity-counter"
          />
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
          <Button
            className="cart-button"
            onClick={() => handleUpdateCart(product.id)}
          >
            {cartData[product.id.toString()] === "remove" ||
            !cartData[product.id]
              ? "Add to Cart"
              : "Go to Cart"}
          </Button>
        </div>
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
