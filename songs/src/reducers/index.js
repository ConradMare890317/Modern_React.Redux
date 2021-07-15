import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Vicorious', duration: '4:20' },
    { title: 'Punk in Drublic', duration: '1:05' },
    { title: 'Evenflow', duration: '3:30' },
    { title: 'A media friendly turn for the worst', duration: '5:20' },
    { title: 'Lateralus', duration: '6:10' },
    { title: 'What the dead men say', duration: '8:25' }
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