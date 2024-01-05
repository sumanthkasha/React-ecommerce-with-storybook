import React from "react";
import PropTypes from 'prop-types';
import './Textfield.scss';

export const Textfield = ({id, name, placeholder, error, showLabel, ...props}) => {
    
    return (
        <div className="textfield">
            {
                showLabel && <label className="textfield__label" htmlFor={id}> {name} </label>
            }
            <input 
                type="text" 
                className="textfield__input"
                name={name} 
                id={id} 
                placeholder={placeholder}
                {...props}
            />
            {
                error && <span className="textfield__error">This field is empty</span>
            }
        </div>
    );
};

Textfield.propTypes = {
    id: PropTypes.string,
    showLabel: PropTypes.bool,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.bool.isRequired,
}

Textfield.defaultProps = {
    id: "textfield",
    showLabel: true,
    name: "TextField",
    error: false,
}