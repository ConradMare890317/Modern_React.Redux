import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <h4>Select a song...</h4>;
  }

  return (
  <div>
    <h2>Details:</h2>
    <p>
      Title: {song.title}
      <br />
      Duration: {song.duration}
      <br />
      Artist: {song.artist}
    </p>
  </div>
  );
};

const mapStateProps = state => {
  return { song: state.selectedSong }
};

export default connect (mapStateProps) (SongDetail);