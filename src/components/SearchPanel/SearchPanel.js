import React from 'react';
import './SearchPanel.css';

const SearchPanel = ({setSearchValue}) => (
	<input type="text"
		className="form-control search-input"
		placeholder="search"
		onChange={(e) => setSearchValue(e.target.value)}
	/>		
);

export default SearchPanel;
