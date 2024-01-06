import React from "react";
import { Outlet } from "react-router-dom";

import './Page.scss';

import { Header } from '../../stories/organisms/Header/Header';
import { Footer } from '../../stories/organisms/Footer/Footer';

export default function Page() {

    return (
        <div className="page-container">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}