import React, { useState } from "react";
import PropTypes from "prop-types";
import "./QuantityCounter.scss";

export const QuantityCounter = ({ initialValue, onIncrement, onDecrement }) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount(count + 1);
    onIncrement(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      onDecrement(count - 1);
    }
  };

  return (
    <div className="quantity-counter">
      <button onClick={handleDecrement}>-</button>
      <span className="quantity-count">{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

QuantityCounter.propTypes = {
  initialValue: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
};

QuantityCounter.defaultProps = {
  initialValue: 0,
  onIncrement: () => {},
  onDecrement: () => {},
};
