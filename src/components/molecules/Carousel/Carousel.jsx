import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.scss';

const SlickCarousel = (props) => {
    const {dots, NoOfSlides, data} = props;

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    const renderList = (data) => {
        return (
            data.map(element => (
                <div className="cmp__slick-carousel__content d-flex flex-column product__product" >
                    <img className="product__img" src={ "./images/"+element.image } alt={ element.brand_name + " " + element.type } />
                    <span className="product__brand"> { element.brand_name } </span>
                    <span className="product__desc"> { element.description } </span>
                    <span className="product__discount"> { element.discount } </span>
                    <span className="product__popularity"> { element.popularity } </span>
                    <span className="product__price"> { element.price } </span>
                </div>
            ))
        )
    }

    return (
        <div className="container-fluid cmp__slick-carousel">
            <Slider {...settings}>
                {/* {
                    props.data && renderList(props.data)
                } */}
                <div className="cmp__slick-carousel__content d-flex flex-column product__product" >1</div>
                <div className="cmp__slick-carousel__content d-flex flex-column product__product" >2</div>
                <div className="cmp__slick-carousel__content d-flex flex-column product__product" >3</div>
                <div className="cmp__slick-carousel__content d-flex flex-column product__product" >4</div>
                <div className="cmp__slick-carousel__content d-flex flex-column product__product" >5</div>
                <div className="cmp__slick-carousel__content d-flex flex-column product__product" >6</div>
            </Slider>
        </div>
    );
}

export default SlickCarousel;