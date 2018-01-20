import React from 'react';
import SearchBar from 'material-ui-search-bar'

const TopSearchBar = () => (
    <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto'
      }}
    />
);

export default TopSearchBar;