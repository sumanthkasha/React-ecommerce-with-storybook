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
            localStorage.setItem('productsData', JSON.stringify(productsData));
        }
        const newCartCount = state.cart.cartData.length.toString();
        setCartCount(newCartCount);
    }, [state]);

    function handlebackToTop() {
        window.scroll({top:0 , left:0, behavior: 'smooth'});
    }

    return (
        <div className="page-container">
            <Header cartCount={cartCount} searchData={!state.productData.isError ? state.productData.data : []} />
            {
                state.productData.isLoading 
                ?
                    <Loader />
                :
                    !state.productData.isError ? 
                    <>
                        <Outlet />
                        <Button className="backToTopButton"onClick={handlebackToTop}> Back to top </Button>
                        <Footer />
                    </>
                    : <Error serverError={true} />

            }
        </div>
    )
}