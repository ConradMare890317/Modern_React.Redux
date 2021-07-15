import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
  return (
  <div className="ui container inline-grid">
    <div className="ui row">
      <div className="column eight wide">
      <h1>Songs</h1>
      <br />
        <SongList />
      </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
    </div>
  </div>
  );
};

export default App;