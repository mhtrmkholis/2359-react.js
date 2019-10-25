import React from 'react';
import { Input } from 'semantic-ui-react';

function SearchBar({ isLoading, defaultValue, setValue, handleSearch }) {
  return (
    <div style={{width: '40%', height: '100px', marginTop: 20}}>
      <form onSubmit={e => {
        e.preventDefault()
        handleSearch()
      }}>
        <Input
          value={defaultValue}
          onChange={e => setValue(e.target.value)}
          loading={isLoading}
          transparent
          icon={{ name: 'search', link: true }}
          placeholder='Start searching for images!'
          style={{ width: '100%', fontSize: '24px', padding: '5px', borderBottom: '1px solid', borderColor: 'rgba(0, 0, 0, 0.2)', marginTop: '25px'}}
        />
      </form>
    </div> 
  )
};

export default SearchBar;