// Bestseller.js
import React from "react";
import PropTypes from "prop-types";
import "./BestSeller.scss";

export const Bestseller = ({ label }) => {
  return <span className="bestseller">{label}</span>;
};

Bestseller.propTypes = {
  label: PropTypes.string,
};

Bestseller.defaultProps = {
  label: "Bestseller",
};
