import React from 'react';
import Message from './message';
import FetchMore from './fetch-more';

function Grid({ data, isLoading, limit, setLimit, setFavGif, unFavGif, source }) {
  return (
    <div style={{display: 'flex', flexFlow: 'row wrap', width: '60%', marginTop: source === 'fav' ? 50 : 0, justifyContent: 'center'}}>
      <Message source={source} isLoading={isLoading} limit={limit} data={data} />
      {
        data.map(datum => (
          <div key={datum.id} style={{flex: '1 0 21%', display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
            <img src={datum.link} alt='gif' width={200} height={150} style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', zIndex: 2}} />
            <div style={{position: 'absolute', width: 200, height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
              <h1 style={{fontSize: '48px', color: 'rgba(0, 0, 0, 0.4)'}}>GIF</h1>
            </div>
            <div style={{position: 'absolute', width: 200, height: 150, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', zIndex: 3}} className={!datum.fav ? 'love-icon' : 'favorited'}>
              <i onClick={() => {
                !datum.fav ?
                setFavGif(datum.id) :
                unFavGif(datum.id)
              }}
              style={{ fontSize: '2em', color: !datum.fav ? 'rgba(255, 0, 0, 0.4)' : 'rgba(255, 0, 0, 0.8)', padding: '5px', cursor: 'pointer' }} className="fas fa-heart"></i>
            </div>
          </div>
        ))
      }
      {
        source === 'search' && data.length > 0 &&
        <FetchMore isLoading={isLoading} limit={limit} setLimit={setLimit} />
      }
    </div>
  )
};

export default Grid;