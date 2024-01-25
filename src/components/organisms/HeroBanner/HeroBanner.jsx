import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import localJson from "../../../assets/jsonData/local.json";
import { bestseller, defaultCollections } from "../../../assets/utility";
import { FaShoppingBag, FaUser, FaArrowRight } from "react-icons/fa";

import { Button } from "../../../stories/atoms/Button/Button";
import { Carousel } from "../../../stories/molecules/Carousel/Carousel";

import './HeroBanner.scss';

export const HeroBanner = () => {
    const state = useSelector((state) => state);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [heroCarouselData, setHeroCarouselData] = useState(null);

    useEffect(() => {
        if (state.productData.data) {
            const firstTenElements = state.productData.data.filter( element => element.tag === bestseller);
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
                <h2> {localJson["hero_banner"][0].title} </h2>
                <p> {localJson["hero_banner"][0].text} </p>
                <ul className="hero-banner__counter">
                    <li>
                        <h3 className="d-flex align-items-start">
                            <FaShoppingBag />{localJson["hero_banner"][0].new_collections}
                        </h3>
                        <span>new collections</span>
                    </li>
                    <li>
                        <h3 className="d-flex align-items-start">
                            <FaUser />{localJson["hero_banner"][0].active_customers}
                        </h3>
                        <span>active customers</span>
                    </li>
                </ul>
                <Button className="btn">
                    <Link to={defaultCollections} >Go to Collections <FaArrowRight /></Link>
                </Button>
            </div>
            <div className="hero-banner__carousel">
                <Carousel 
                    data={heroCarouselData} 
                    slidesToShow={slidesToShow} 
                    slidesToScroll={1}
                    arrows={false} 
                    variableWidth= {true}
                    bestseller={true}
                />
            </div>
            <div className="circle"></div>
        </section>
    )
}