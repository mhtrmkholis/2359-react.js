import React, { useState, useEffect } from 'react';
import alertify from 'alertifyjs';
import './App.css';
import { connect } from 'react-redux';
import Pagination from './components/pagination';
import SearchBar from './components/search-bar';
import Grid from './components/grid';
import { fetchGifsBySearch, setFavGif, unFavGif } from './store/action';

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  searchValue: state.searchValue,
  gifs: state.gifs,
  favoriteGifs: state.favoriteGifs
});

const mapDispatchToProps = {
  fetchGifsBySearch,
  setFavGif,
  unFavGif
};

function App({ isLoading, searchValue, gifs, fetchGifsBySearch, setFavGif, unFavGif, favoriteGifs }) {
  const [value, setValue] = useState('');
  const [limit, setLimit] = useState(0);
  const [showFav, setShowFav] = useState(false);
  
  useEffect(() => {
    if (limit) {
      fetchGifsBySearch(value, limit, favoriteGifs)
    }
  }, [limit]);
  
  function handleSearch() {
    if (value === searchValue) {
      alertify.notify('Try another keyword', 'same-value', 4);
    } else {
      limit !== 8 ? setLimit(8) : fetchGifsBySearch(value, limit, favoriteGifs);
    };
  };

  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', paddingBottom: 150}}>
      
      <Pagination 
        showFav={showFav} 
        setShowFav={setShowFav} 
        favoriteGifs={favoriteGifs} 
      />
      { 
        !showFav && 
        <SearchBar 
          isLoading={isLoading} 
          defaultValue={value} 
          setValue={setValue} 
          handleSearch={handleSearch} 
        /> 
      }
      <Grid 
        isLoading={isLoading} 
        data={!showFav ? gifs : favoriteGifs} 
        setFavGif={setFavGif} 
        unFavGif={unFavGif}
        limit={limit} 
        setLimit={setLimit} 
        source={!showFav ? 'search' : 'fav'} 
      />

    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
