import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Punk in Drublic', duration: '1:05' },
    { title: 'Evenflow', duration: '3:30' },
    { title: 'Fear Inoculum', duration: '5:20' },
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