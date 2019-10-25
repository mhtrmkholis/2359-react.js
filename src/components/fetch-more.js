import React from 'react';
import { Loader } from 'semantic-ui-react';

function FetchMore({ isLoading, limit, setLimit }) {
  return (
    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
      {
        isLoading ?
        <Loader style={{marginTop: 50}} active inline='centered' /> :
        <div className='fetch-more'
          onClick={() => setLimit(limit + 8)}
          
        >Fetch More</div>
      }
    </div> 
  )
};

export default FetchMore;