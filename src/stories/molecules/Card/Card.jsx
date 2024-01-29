import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import DefaultImage from '../../../assets/images/default-image.svg';

import { ImageCmp } from "../../../stories/atoms/Image/ImageCmp";
import { QuantityCounter } from "../../atoms/Counter/QuantityCounter";
import { Button } from "../../atoms/Button/Button";
import './Card.scss';

export const ProductCard = ({image, brand_name, description, popularity, price, discount, addToCartButton, data, counter, linkTo, ...props}) => {

    function handleImageError(event) {
        event.target.src = DefaultImage;
    }

    return(
        <section className="card">
            <ImageCmp src={image || DefaultImage} alt={brand_name || 'Unknown Brand'} onError={handleImageError} figcaption={""} />
            <div className="card__details">
                <Link to={linkTo} relative="path" className="d-flex flex-column">
                    {brand_name && <span className="product__brand"> {brand_name} </span>}
                    {description && <span className="product__desc"> {description} </span>}
                    {discount && <span className="product__discount"> Up to {discount} </span>}
                    {popularity && <span className="product__popularity"> Popularity: {popularity} </span>}
                    {price && <span className="product__price"> &#8377; {price} </span>}
                </Link>
                {counter && <QuantityCounter />}
            </div>

            {/* {
                addToCartButton && 
                <Button primary={true} size={"large"}>
                    <Link to="/cart" relative="path">Add to Cart</Link>
                </Button>

            } */}
        </section>
    );
};

ProductCard.propTypes = {
    image: PropTypes.string,
    brand_name: PropTypes.string,
    description: PropTypes.string,
    description: PropTypes.string,
    popularity: PropTypes.string,
    price: PropTypes.string,
    discount: PropTypes.string,
    counter: PropTypes.bool,
    linkTo: PropTypes.string,
};

ProductCard.defaultProps = {
    image: DefaultImage,
    brand_name: '',
    description:'' ,
    popularity:'' ,
    price: '',
    discount: '',
    counter: false,
    linkTo: "#"
}