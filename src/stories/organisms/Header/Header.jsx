import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

import { Button } from "../../atoms/Button/Button";
import { Search } from "../../molecules/Search/Search";
import { FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";

import BannerImg from "../../../assets/images/TA_logo.svg";

import "./Header.scss";

export const Header = ({cartCount, ...props}) => {
    
    return (
        <header className="header">
            <nav className="nav-bar navbar navbar-expand-lg px-2">
                <div className="container-fluid">
                    <div className="nav-bar--tablet d-flex justify-content-between">
                        <div className="nav-bar__banner-img pe-2">
                            <NavLink aria-current="page" to="/">
                                <img src={BannerImg} alt="Banner" />
                            </NavLink>
                        </div>

                        <Search className="d-flex nav-bar__search nav-bar__search--tablet px-4" placeholder="Search" />

                        <Button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <FaBars />
                        </Button>
                    </div>
                    <div className="collapse nav-bar__container navbar-collapse justify-content-end" id="navbarSupportedContent" >
                        <Search className="nav-bar__search nav-bar__search--desktop" placeholder="Search" />

                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link d-flex align-items-center"
                                    aria-current="page"
                                    to="/wishlist"
                                    title="Wishlist"
                                >
                                    <FaHeart />
                                    <span className="nav-bar__text"> Wishlist </span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link d-flex align-items-center"
                                    aria-current="page"
                                    to="/cart"
                                    title="Go to cart"
                                >
                                    <span className="nav-link__cart-count"> {cartCount} </span>
                                    <FaShoppingCart />
                                    <span className="nav-bar__text">Cart</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
};

Header.propTypes = {
    cartCount: PropTypes.string,
};

Header.defaultProps = {
    cartCount: "0"
};
