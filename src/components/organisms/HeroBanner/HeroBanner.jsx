import React, { useState, useEffect } from "react";

import { FaShoppingBag, FaUser, FaArrowRight } from "react-icons/fa";
import { Button } from "../../../stories/atoms/Button/Button";
import { Carousel } from "../../../stories/molecules/Carousel/Carousel";

import './HeroBanner.scss';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const HeroBanner = () => {
    const state = useSelector((state) => state);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [heroCarouselData, setHeroCarouselData] = useState(null);

    useEffect(() => {
        // if (state.productData.data) {
        //     const firstTenElements = state.productData.data.slice(0, 7);
        //     setHeroCarouselData(firstTenElements);
        // }

        if (state.productData.data) {
            const firstTenElements = state.productData.data.filter( element => element.tag === "bestseller");
            // console.log(firstTenElements);
            setHeroCarouselData(firstTenElements);
        }

    }, [state.productData.data]);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 992) {
            setSlidesToShow(3);
          } else if (window.innerWidth >= 768) {
            setSlidesToShow(2);
          } else {
            setSlidesToShow(1);
          }
        };
    
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

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
                    <Link to={"/collections"} >Go to Collections <FaArrowRight /></Link>
                </Button>
            </div>
            <div className="hero-banner__carousel">
                <Carousel 
                    data={heroCarouselData} 
                    slidesToShow={slidesToShow} 
                    slidesToScroll={1}
                    arrows={false} 
                    variableWidth= {true}
                />
            </div>
            <div className="circle"></div>
        </section>
    )
}