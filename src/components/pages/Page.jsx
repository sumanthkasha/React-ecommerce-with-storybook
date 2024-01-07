import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../../redux/slice/productDataSlice";

import './Page.scss';

import { Header } from '../../stories/organisms/Header/Header';
import { Footer } from '../../stories/organisms/Footer/Footer';
import { Loader } from "../../stories/molecules/Loader/Loader";

export default function Page() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchProductsData())
    }, [])

    console.log("State", state);

    return (
        <div className="page-container">
            <Header />
            {
                state.productData.isLoading 
                ?
                    <Loader />
                :
                    <>
                        <Outlet />
                        <Footer />
                    </>

            }
        </div>
    )
}