import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../atoms/Button/Button';
import { BsSearch } from "react-icons/bs";

import './Search.scss';

export const Search = ({ placeholder, ...props }) => {

    return (
        <>
            <form className="d-flex cmp-search px-4" role="search" {...props}>
                <input className="form-control me-2" type="search" placeholder={placeholder} aria-label="Search" />
                <Button className="btn btn-outline-success" type="submit"> <BsSearch /> </Button>
            </form>
        </>
    )
};


Search.propTypes = {
    placeholder: PropTypes.string.isRequired,
};

Search.defaultProps = {
    placeholder: null,
};
