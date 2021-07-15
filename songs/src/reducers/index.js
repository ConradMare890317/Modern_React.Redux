import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Punk in Drublic', duration: '1:05', artist: 'NOFX' },
    { title: 'Evenflow', duration: '3:30', artist: 'Pearl Jam' },
    { title: 'A media friendly turn for the worst', duration: '5:20', artist: 'Norma Jean' },
    { title: 'Lateralus', duration: '6:10', artist: 'Tool' }
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