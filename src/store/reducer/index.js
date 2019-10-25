const initialState = {
  isLoading: false,
  error: [],
  searchValue: '',
  gifs: [],
  favoriteGifs: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_LOADING': 
      return {
        ...state,
        isLoading: !state.isLoading
      }
    case 'FETCH_GIFS_BY_SEARCH':
      return {
        ...state,
        gifs: state.searchValue && state.searchValue === action.payload.value ? [...state.gifs, ...action.payload.data] : action.payload.data,
        searchValue: action.payload.value,
      }
    case 'SET_FAV_GIF':
      return {
        ...state,
        gifs: state.gifs.map(el => {
          if (el.id === action.payload) el.fav = !el.fav
          return el;
        }),
        favoriteGifs: [...state.gifs.filter(el => el.id === action.payload), ...state.favoriteGifs].filter(el => el.fav)
      }
    case 'UNFAV_GIF':
      return {
        ...state,
        gifs: state.gifs.map(el => {
          if (el.id === action.payload) el.fav = !el.fav
          return el;
        }),
        favoriteGifs: state.favoriteGifs.filter(el => el.id !== action.payload)
      }
    default:
      return state;
  }
};