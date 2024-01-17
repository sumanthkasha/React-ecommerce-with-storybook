import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../atoms/Button/Button';
import { BsSearch } from 'react-icons/bs';

import './Search.scss';
import { useSelector } from 'react-redux';

export const Search = ({ placeholder, ...props }) => {
    const state = useSelector((state) => state);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState(null);
    const searchData = state.productData.data

    useEffect(() => {
        const result = searchData && searchData.filter((ele) => {
            const lowercaseSearchQuery = searchQuery.toLowerCase();
            const lowercaseType = ele.type && ele.type.toLowerCase();
            const lowercaseDescription = ele.description && ele.description.toLowerCase();
    
            return (
                (lowercaseType && lowercaseType.includes(lowercaseSearchQuery)) ||
                (lowercaseDescription && lowercaseDescription.includes(lowercaseSearchQuery))
            );
        });
    
        setSearchResults(searchQuery ? result : []);
    }, [searchData, searchQuery]);

    const handleSearchFunc = (event) => {
        event.preventDefault();
    };

    function showSearchResults() {
        const searchResultsElement = document.getElementsByClassName("cmp-search__results");
        
        for (let i = 0; i < searchResultsElement.length; i++) {
            searchResultsElement[i].classList.remove("d-none");
        }
    }

    return (
        <>
            <form className="d-flex cmp-search px-4" onClick={showSearchResults} role="search" onSubmit={handleSearchFunc} {...props}>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder={placeholder}
                    aria-label="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button className="btn btn-outline-success" type="submit"> <BsSearch /> </Button>
                
                <ul className='cmp-search__results'>
                    {searchResults && [...searchResults.slice(0, 3), ...searchResults.slice(-2)].map((result, index) => (
                        <li key={index}>
                            <a href={`/collections/${result.type}`} title={result.brand_name + " " +result.description}>
                                {result.brand_name} - {result.description}
                            </a>
                        </li>
                    ))}
                </ul>

            </form>
        </>
    );
};

Search.propTypes = {
    placeholder: PropTypes.string.isRequired,
};

Search.defaultProps = {
    placeholder: '',
};
