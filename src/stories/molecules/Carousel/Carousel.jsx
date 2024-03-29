import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import DefaultImage from '../../../assets/images/default-image.svg';

import { Bestseller } from '../../atoms/Tag/BestSeller';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.scss';

export const Carousel = ({dots, slidesToShow, slidesToScroll, autoplay, arrows, data, imgSource, bestseller, ...props}) => {
    
    var settings = {
        dots: dots,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        autoplay: autoplay,
        autoplaySpeed: 3000,
        arrows: arrows, 
        ...props
    };

    function handleImageError(event) {
        event.target.src = DefaultImage;
    }

    const renderList = (data) => {
        return (
            data.map((element, index) => (
                <div key={index} className="cmp__slick-carousel__content d-flex flex-column product__product">
                    {bestseller && <Bestseller />}
                    <div className="cmp__slick-carousel__img-wrapper">
                        <img 
                            className="product__img" 
                            src={imgSource + (element.image || "default-image.svg")} 
                            alt={element.brand_name || 'Unknown Brand' + " " + element.type || '' } 
                            onError={handleImageError}
                        />
                    </div>
                    
                    <div className='product__desc-data'>
                        {element.brand_name && <span className="product__brand"> {element.brand_name} </span>}
                        {element.description && <span className="product__desc"> {element.description} </span>}
                        {element.discount && <span className="product__discount"> {element.discount} </span>}
                        {element.popularity && <span className="product__popularity"> {element.popularity} </span>}
                        {element.price && <span className="product__price"> {element.price} </span>}
                    </div>
                </div>
            ))
        )
    }

    return (
        <div className="container-fluid cmp__slick-carousel">
            {
                <Slider {...settings}>
                    {
                        data && renderList(data)
                    }
                </Slider>
            }
        </div>
    )
}

Carousel.propTypes = {
    dots: PropTypes.bool,
    autoplay: PropTypes.bool,
    arrows: PropTypes.bool,
    imgSource: PropTypes.string,
    bestseller: PropTypes.bool,
};

Carousel.defaultProps = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    imgSource: "/images/",
    bestseller: false,
}