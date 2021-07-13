import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'All Apologies', duration: '4:05' },
    { title: 'Evenflow', duration: '2:30' },
    { title: 'Fade to Black', duration: '5:20' },
    { title: 'No Scrubs', duration: '3:10' }
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});