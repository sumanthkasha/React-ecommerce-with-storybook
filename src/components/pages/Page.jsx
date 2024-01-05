import React from "react";
import { Outlet } from "react-router-dom";

import './Page.scss';

import Header from "../organisms/Header/Header";
import Footer from "../organisms/Footer/Footer";

export default function Page() {

    return (
        <div className="page-container">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}