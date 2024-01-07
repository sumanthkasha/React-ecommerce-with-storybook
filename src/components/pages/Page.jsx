import React, { useEffect } from "react";
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

    useEffect(() => {
        dispatch(fetchProductsData())
    }, [dispatch]);

    useEffect(() => {
        if (!state.productData.isLoading) {
            const productsData = state.productData.data;
            localStorage.setItem('productsData', JSON.stringify(productsData));
        }
    }, [state.productsData]);

    return (
        <div className="page-container">
            <Header />
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