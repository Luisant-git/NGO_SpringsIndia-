import React, { useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi'; // Using react-icons for icons

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="jm-browse-job-sidebar-widget mb-35">
      <form action="#">
        <div className="search-bar-container" style={{ position: 'relative' }}>
          <input
            className="search_keyword input-width"
            name="search_location"
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Job Keywords..."
            style={{ paddingRight: '40px' }} // To give space for the icons
          />
          {searchTerm ? (
            <FiX
              className="clear-icon"
              onClick={clearSearch}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer'
              }}
            />
          ) : (
            <FiSearch
              className="search-icon"
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none'
              }}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
