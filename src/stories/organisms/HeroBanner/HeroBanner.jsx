import React, { useState, useEffect } from "react";

import { FaShoppingBag, FaUser, FaArrowRight } from "react-icons/fa";
import { Button } from "../../atoms/Button/Button";
import { Carousel } from "../../molecules/Carousel/Carousel";

import './HeroBanner.scss';
import { useSelector } from "react-redux";

export const HeroBanner = () => {
    const state = useSelector((state) => state);
    const [heroCarouselData, setHeroCarouselData] = useState(null);

    useEffect(() => {
        if (state.productData.data) {
            const firstTenElements = state.productData.data.slice(0, 7);
            setHeroCarouselData(firstTenElements);
        }
    }, [state.productData.data]);

    console.log(state);

    return (
        <section className="hero-banner">
            <div className="hero-banner__content">
                <h2>Welcome to TA Ecommerce</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae quam magnam obcaecati error consequatur repellat fugiat,
                    deleniti nisi eum voluptates.
                </p>
                <ul className="hero-banner__counter">
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
                <Button className="btn">
                    Go to Collections <FaArrowRight />
                </Button>
            </div>
            <div className="hero-banner__carousel">
                <Carousel data={heroCarouselData} slidesToShow={3} arrows={false} />
            </div>
            <div className="circle"></div>
        </section>
    )
}