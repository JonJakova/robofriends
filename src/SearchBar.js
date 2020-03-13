import React from 'react';

function SearchBar({searchChange}) {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lighest-blue'
                type='search'
                placeholder='Search robot'
                onChange={searchChange} />
        </div>
    );
}

export default SearchBar;