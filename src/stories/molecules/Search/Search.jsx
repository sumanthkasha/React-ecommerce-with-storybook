import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../atoms/Button/Button';
import { BsSearch } from "react-icons/bs";

import './Search.scss';

export const Search = ({ data, placeholder, ...props }) => {
    const [searchData, setSearchData] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        setSearchData(data);
        console.log(data);
    }, [data]);
    
    useEffect(() => {
        const results =
            searchData &&
            searchData.filter((element) => {
                const type = element.type && element.type.toLowerCase();
                const description = element.description && element.description.toLowerCase();
    
                return (
                    type && type.includes(searchQuery.toLowerCase()) ||
                    description && description.includes(searchQuery.toLowerCase())
                );
            });
    
        setSearchResults(results || []);

        console.log(searchQuery);
    }, [searchData, searchQuery]);
    

    const handleSearch = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <form className="d-flex cmp-search px-4" role="search" onSubmit={handleSearch} {...props}>
                <input 
                    className="form-control me-2" 
                    type="search" 
                    placeholder={placeholder} 
                    aria-label="Search" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button className="btn btn-outline-success" type="submit"> <BsSearch /> </Button>

                {searchResults && searchResults.length > 0 && (
                    <div className="search-results-dropdown">
                        <ul>
                            {searchResults.map((result) => (
                                <li key={result.id}>{result.description}</li>
                            ))}
                        </ul>
                    </div>
                )}
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
