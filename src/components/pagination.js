import React from 'react';

function Pagination({ setShowFav, showFav, favoriteGifs }) {
  return (
    <div style={{width: '60%', marginTop: 50}}>
      <div style={{display: 'flex', borderBottom: '2px solid', borderColor: 'rgba(0, 0, 0, 0.2)'}}>
        <div style={{display: 'flex', padding: 10, marginLeft: 10}}>
          <h2 style={{ margin: 0, color: 'rgba(0, 0, 0, 0.4)' }}>Galler</h2>
          <h2 style={{ margin: 0, color: 'rgba(0, 0, 0, 0.8)' }}>easy</h2>
        </div>
        <h2 style={{ margin: 0, padding: 10, color: 'rgba(0, 0, 0, 0.4)' }}>|</h2>
        <h2 onClick={() => setShowFav(false)} style={{ cursor: 'pointer', margin: 0, padding: 10, color: !showFav ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.4)' }} >Search</h2>
        <h2 onClick={() => setShowFav(true)} style={{ cursor: 'pointer', margin: 0, padding: 10, color: !showFav ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.8)' }} >Favorites{favoriteGifs.length ? `(${favoriteGifs.length})` : ''}</h2>
      </div>
    </div>
  )
};

export default Pagination;