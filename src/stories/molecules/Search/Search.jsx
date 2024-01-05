import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

import { Button } from '../../atoms/Button/Button';
import { BsSearch } from "react-icons/bs";

import './Search.scss';

$('#searchButton').on('click', function() {
    alert("Hello sumanth");
})

export const Search = ({ placeholder }) => {

    return (
        <header>
            <form className="d-flex nav-bar__search nav-bar__search--tablet px-4" role="search">
                <input className="form-control me-2" type="search" placeholder={placeholder} aria-label="Search" />
                <Button className="btn btn-outline-success" id="searchButton" size="small" > 
                    <BsSearch />
                </Button>
            </form>
        </header>
    )
};


Search.propTypes = {
    placeholder: PropTypes.string.isRequired,
};

Search.defaultProps = {
    placeholder: null,
};
