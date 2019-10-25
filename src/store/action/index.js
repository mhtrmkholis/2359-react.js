import axios from 'axios';
import alertify from 'alertifyjs';
const baseUrl = 'https://cors-anywhere.herokuapp.com/api.giphy.com/v1/gifs/search?';
const apiKey = 'm2DWMKOrn7PDI9nA4frM78wjeiL6ziuJ';

export function fetchGifsBySearch(value, limit, favorites) {
  return dispatch => {
    dispatch({ type: 'FETCH_LOADING' });
    axios.get(`${baseUrl}q=${value}&limit=${limit}&api_key=${apiKey}`)
    .then(({ data }) => {
      dispatch({
        type: 'FETCH_GIFS_BY_SEARCH',
        payload: {
          data: data.data.map(el => ({ 
            id: el.id, 
            link: el.images.original.url, 
            fav: favorites.map(favorite => favorite.id).includes(el.id) ? true : false 
          })).slice(limit > 8 ? limit - 8 : 0),
          value
        }
      })
      dispatch({ type: 'FETCH_LOADING' });
    });
  };
};

export function setFavGif(id) {
  return dispatch => {
    alertify.notify('Added to favorites', 'fav', 2.5);
    dispatch({ type: 'SET_FAV_GIF', payload: id })
  };
};

export function unFavGif(id) {
  return dispatch => {
    alertify.notify('Removed from favorites', 'unfav', 2.5);
    dispatch({ type: 'UNFAV_GIF', payload: id })
  };
};