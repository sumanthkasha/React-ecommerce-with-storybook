import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export const AnchorButton = ({ linkTo, ...props }) => {
    
    return (
        <a href={linkTo}>
            {props.children ?? "Link"}
        </a>
    );
};

AnchorButton.propTypes = {
    linkTo: PropTypes.string,
}

AnchorButton.defaultProps = {
    linkTo: '#',
};