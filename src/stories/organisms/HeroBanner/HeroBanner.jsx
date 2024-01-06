import React from "react";

import { FaShoppingBag, FaUser, FaArrowRight } from "react-icons/fa";
import { Button } from "../../atoms/Button/Button";

import './HeroBanner.scss';

export const HeroBanner = () => {
    return (
        <section className="hero-banner">
            <div class="hero-banner__content">
                <h2>Welcome to TA Ecommerce</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae quam magnam obcaecati error consequatur repellat fugiat,
                    deleniti nisi eum voluptates.
                </p>
                <ul class="hero-banner__counter">
                    <li>
                        <h3 className="d-flex align-items-start">
                            <FaShoppingBag />68+k
                        </h3>
                        <span>new collections</span>
                    </li>
                    <li>
                        <h3 className="d-flex align-items-start">
                            <FaUser />25,634
                        </h3>
                        <span>active customers</span>
                    </li>
                </ul>
                <Button class="btn">
                    Go to Collections <FaArrowRight />
                </Button>
            </div>
            <div class="circle"></div>
        </section>
    )
}