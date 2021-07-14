import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'All Apologies', duration: '4:05' },
    { title: 'Evenflow', duration: '2:30' },
    { title: 'Parabola', duration: '5:20' },
    { title: 'Lateralus', duration: '6:10' }
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