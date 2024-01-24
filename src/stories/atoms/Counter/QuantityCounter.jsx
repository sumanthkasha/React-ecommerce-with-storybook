import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./QuantityCounter.scss";

export const QuantityCounter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    if (count < 9) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleInputChange = (e) => {
    const inputCount = parseInt(e.target.value, 10) || 0;
    if (!isNaN(inputCount) && inputCount >= 0 && inputCount <= 9) {
      setCount(inputCount);
    }
  };

  return (
    <div className="quantity-counter">
      <span className="quantity-counter__decrement" onClick={handleDecrement}> <FaMinus /> </span>
      <input 
        className="quantity-counter__input" 
        type="text" 
        value={count} 
        onChange={handleInputChange} 
        min="0"
        max="9" />
      <span className="quantity-counter__increment" onClick={handleIncrement}> <FaPlus /> </span>
    </div>
  );
};

QuantityCounter.propTypes = {
  initialValue: PropTypes.number,
};

QuantityCounter.defaultProps = {
  initialValue: 0,
};
