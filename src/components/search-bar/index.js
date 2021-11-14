import React from 'react';
import Input from '../input';
import './index.scss';

const SearchBar = ({
    handleSearch,
    placeholder,
    value
}) => {
    return (
        <form>
            <Input
                className='search-bar'
                value={value}
                onChange={handleSearch}
                placeholder={placeholder}
            />
        </form>
    )
};

export default SearchBar;