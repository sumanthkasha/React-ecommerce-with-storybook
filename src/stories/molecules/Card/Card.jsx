import React from "react";
import PropTypes from 'prop-types';
import DefaultImage from '../../../assets/images/default-image.svg';

import { ImageCmp } from "../../../stories/atoms/Image/ImageCmp";
import { Button } from "../../atoms/Button/Button";
import './Card.scss';

export const ProductCard = ({image, brand_name, description, popularity, price, discount, addToCartButton, data, ...props}) => {

    var productData = {
        image: image,
        brand_name: brand_name,
        description: description,
        popularity: popularity,
        price: price,
        discount: discount
    }
    function handleImageError(event) {
        event.target.src = DefaultImage;
    }

    return(
        <section className="card">
            <ImageCmp src={image || DefaultImage} alt={brand_name || 'Unknown Brand'} onError={handleImageError} figcaption={""} />
            {brand_name && <span className="product__brand"> {brand_name} </span>}
            {description && <span className="product__desc"> {description} </span>}
            {discount && <span className="product__discount"> Up to {discount} </span>}
            {popularity && <span className="product__popularity"> Popularity: {popularity} </span>}
            {price && <span className="product__price"> &#8377; {price} </span>}

            {
                addToCartButton && 
                <Button primary={true} size={"large"} className="product__addToCart">
                    Add to Cart
                </Button>

            }
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
    addToCartButton: PropTypes.bool,
};

ProductCard.defaultProps = {
    image: DefaultImage,
    brand_name: '',
    description:'' ,
    popularity:'' ,
    price: '',
    discount: '',
    addToCartButton: true
}
