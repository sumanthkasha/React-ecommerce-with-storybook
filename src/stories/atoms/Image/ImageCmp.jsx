import React from "react";
import DefaultImage from "../../../assets/images/default-image.svg";
import PropTypes from "prop-types";
import "./Image.scss";

export const ImageCmp = ({ src, alt, figcaption }) => {
  function handleImageError(event) {
    event.target.src = DefaultImage;
  }
  return (
    <div className="imgCmp">
      <figure>
        <img
          className="product__img"
          src={"/images/" + (src || "default-image.svg")}
          alt={alt || "Unknown Brand"}
          onError={handleImageError}
        />
        {figcaption && <figcaption>{figcaption} </figcaption>}
      </figure>
    </div>
  );
};

ImageCmp.propTypes = {
  src: PropTypes.string,
};

ImageCmp.defaultProps = {
  src: "logo192.png",
};
