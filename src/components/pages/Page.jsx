import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../../redux/slice/productDataSlice";

import './Page.scss';

import { Header } from '../../stories/organisms/Header/Header';
import { Footer } from '../../stories/organisms/Footer/Footer';
import { Loader } from "../../stories/molecules/Loader/Loader";
import { Error } from "../../stories/pages/Error/Error";

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

    return (
        <div className="page-container">
            <Header cartCount={cartCount} />
            {
                state.productData.isLoading 
                ?
                    <Loader />
                :
                    !state.productData.isError ? 
                    <>
                        <Outlet />
                        <Footer />
                    </>
                    : <Error serverError={true} />

            }
        </div>
    )
}