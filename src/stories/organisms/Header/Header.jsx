import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { Button } from "../../atoms/Button/Button";
import { BsSearch } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

import BannerImg from "../../../assets/images/TA_logo.svg";

import "./Header.scss";

export const Header = () => (
  <header className="header">
        <nav className="nav-bar navbar navbar-expand-lg px-2">
            <div className="container-fluid">
                <div className="nav-bar--tablet d-flex justify-content-between">
                    <div className="nav-bar__banner-img pe-2">
                        <NavLink aria-current="page" to="/">
                            <img src={BannerImg} alt="Banner" />
                        </NavLink>
                    </div>
                    <form className="d-flex nav-bar__search nav-bar__search--tablet px-4" role="search" >
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">
                            <BsSearch />
                        </button>
                    </form>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <FaBars />
                    </button>
                </div>
                <div className="collapse nav-bar__container navbar-collapse justify-content-end" id="navbarSupportedContent" >
                    <form className="nav-bar__search nav-bar__search--desktop" role="search" >
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">
                            <BsSearch />
                        </button>
                    </form>

                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link d-flex align-items-center"
                                aria-current="page"
                                to="/link"
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
                                to="/"
                                title="Go to cart"
                            >
                                <span className="nav-link__cart-count">0</span>
                                <FaShoppingCart />
                                <span className="nav-bar__text">Cart</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  </header>
);

Header.propTypes = {
 
};

Header.defaultProps = {
};
