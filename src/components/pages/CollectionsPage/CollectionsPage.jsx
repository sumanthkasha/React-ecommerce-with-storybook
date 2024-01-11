import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct, addProductToCart, removeProductFromCart } from "../../../redux/slice/productDataSlice";

import { Loader } from '../../../stories/molecules/Loader/Loader';
import { Button } from "../../../stories/atoms/Button/Button";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import "./CollectionsPage.scss";

const CollectionsPage = () => {
    const dispatch = useDispatch();
    const { isLoading, data } = useSelector((state) => state.productData);

    const [productList, setProductList] = useState(data || []);
    const [filteredProductList, setFilteredProductList] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeSortByPrice, setActiveSortByPrice] = useState(null);
    const [activeSortByDiscount, setActiveSortByDiscount] = useState(null);
    const [wishlistData, setWishListData] = useState({});
    const [cartData, setCartData] = useState({});

    useEffect(() => {
        if (data) {
            setProductList(data);
            filteredProducts("tshirt");
        }
    }, [data]);

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
                // else if (status === "remove") {
                //     dispatch(removeProductFromCart(productId));
                // }
            }
        }
    }, [wishlistData, cartData, dispatch]);

    const handleUpdateWishlist = (productId) => {
        setWishListData((prevWishlistData) => {
            const newStatus = prevWishlistData[productId] === "add" ? "remove" : "add";
            return {
                ...prevWishlistData,
                [productId]: newStatus,
            };
        });
    };

    const handleUpdateCart = (productId) => {
        setCartData((prevCartData) => {
            // const newStatus = prevCartData[productId] === "add" ? "remove" : "add";
            return {
                ...prevCartData,
                [productId]: "add",
            };
        });
    }

    console.log(useSelector((state) => state));

    const filteredProducts = (data = "tshirt") => {
        const renderedProducts = productList.filter((product) => product.type === data);
        setFilteredProductList(renderedProducts);
        setActiveCategory(data);
    };

    if (isLoading) {
        return <Loader />;
    }

    const filterCategories = () => {
        const categoryCounts = productList.reduce((counts, item) => {
            const brandName = item.type;
            if (brandName !== undefined) {
                counts[brandName] = (counts[brandName] || 0) + 1;
            }
            return counts;
        }, {});

        return Object.entries(categoryCounts).map(([brandName, count]) => (
            <li key={brandName} className={activeCategory === brandName ? 'active' : ''} onClick={() => filteredProducts(brandName)}>
                <span>{`${brandName}s`}</span>
            </li>
        ));
    };

    const sortByPrice = () => {
        const sortedList = [...filteredProductList];
        sortedList.sort((prod1, prod2) => (prod1.price > prod2.price ? 1 : -1));
        setFilteredProductList(sortedList);
        setActiveSortByPrice(true);
        setActiveSortByDiscount(false);
    };

    const sortByDiscount = () => {
        const sortedList = [...filteredProductList];
        sortedList.sort((prod1, prod2) => (prod1.discount > prod2.discount ? 1 : -1));
        setFilteredProductList(sortedList);
        setActiveSortByPrice(false);
        setActiveSortByDiscount(true);
    };

    return (
        <div className="d-flex flex-column px-2">
            <section className="d-flex align-items-center product__categories">
                <ol className="d-flex align-items-center product__filters mb-0">
                    {productList && filterCategories()}
                </ol>
                <section className="product__sorts d-flex justify-content-end ms-auto">
                    <span className={activeSortByPrice ? "product__sort-by-price active" : "product__sort-by-price"} onClick={sortByPrice}>
                        sort-by-price
                    </span>
                    <span className={activeSortByDiscount ? "product__sort-by-discount active" : "product__sort-by-discount"} onClick={sortByDiscount}>
                        sort-by-discount
                    </span>
                </section>
            </section>
            <main className="product__filtered">
                <div>
                    <section id="filteredProducts">
                        <ul className="product__product-list">
                            {filteredProductList &&
                                filteredProductList.map((prod) => (
                                    <li key={prod.id} className="d-flex flex-column product__product">
                                        <Button
                                            className="product__wishlist"
                                            onClick={() => handleUpdateWishlist(prod.id)}
                                        >
                                            {wishlistData[prod.id.toString()] === 'remove' || !wishlistData[prod.id] ? <CiHeart /> : <FaHeart />}
                                        </Button>
                                        <img className="product__img" src={"./images/" + prod.image} alt={prod.brand_name + " " + prod.type} />
                                        <span className="product__brand"> {prod.brand_name} </span>
                                        <span className="product__desc"> {prod.description} </span>
                                        <span className="product__discount"> {prod.discount} </span>
                                        <span className="product__popularity"> {prod.popularity} </span>
                                        <span className="product__price"> {prod.price} </span>
                                        <Button
                                            className="product__cart"
                                            onClick={() => handleUpdateCart(prod.id)}
                                        >
                                            {cartData[prod.id.toString()] === 'remove' || !cartData[prod.id] ? "Add to cart" : "Go to Cart"}
                                        </Button>
                                    </li>
                                ))}
                        </ul>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default CollectionsPage;
