import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../../redux/slice/productDataSlice";

import './Page.scss';

import { Header } from '../../stories/organisms/Header/Header';
import { Footer } from '../../stories/organisms/Footer/Footer';
import { Loader } from "../../stories/molecules/Loader/Loader";
import { Error } from "../../stories/pages/Error/Error";
import { Button } from "../../stories/atoms/Button/Button";

export default function Page() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [cartCount, setCartCount] = useState();

    useEffect(() => {
        dispatch(fetchProductsData())
    }, [dispatch]);

    useEffect(() => {
        if (!state.productData.isLoading) {
            const productsData = state.productData.data;
            const wishlistData = state.wishlist.wishlistData || [];
            const cartData = state.cart.cartData || [];
    
            if (productsData && productsData.length > 0) {
                localStorage.setItem('productsData', JSON.stringify(productsData));
            }
    
            if (wishlistData && wishlistData.length > 0) {
                localStorage.setItem('wishlistData', JSON.stringify(wishlistData));
            }
    
            if (cartData && cartData.length > 0) {
                localStorage.setItem('cartData', JSON.stringify(cartData));
                const newCartCount = cartData.length.toString();
                setCartCount(newCartCount);
            }
        }
    }, [state]);

    function handlebackToTop() {
        window.scroll({top:0 , left:0, behavior: 'smooth'});
    }

    function hideSearchResults() {
        
        const searchResultsElement = document.getElementsByClassName("cmp-search__results");
        
        for (let i = 0; i < searchResultsElement.length; i++) {
            searchResultsElement[i].classList.add("d-none");
        }
    }

    return (
        <div className="page-container">
            <Header cartCount={cartCount} />
            {
                state.productData.isLoading 
                ?
                    <Loader />
                :
                    !state.productData.isError ? 
                    <div onClick={hideSearchResults}>
                        <Outlet />
                        <Button className="backToTopButton"onClick={handlebackToTop}> Back to top </Button>
                        <Footer />
                    </div>
                    : <Error serverError={true} />

            }
        </div>
    )
}