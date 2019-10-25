import React from 'react';

function Message({ source, data, limit, isLoading }) {
  return (
    <div>
      {
        source === 'fav' && !data.length ?
        <h1 style={{ color: 'rgba(0, 0, 0, 0.4)' }}>You have no favorite gif!</h1> :
        source === 'search' && !data.length && limit && !isLoading ?
        <h1 style={{ color: 'rgba(0, 0, 0, 0.4)' }}>Not found!</h1> :
        false
      }
    </div>
  )
};

export default Message;