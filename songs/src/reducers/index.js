import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "So sock", duration: "3:31" },
    { title: "Macarena", duration: "2:30" },
    { title: "All star", duration: "3:15" },
    { title: "I want it That Way", duration: "1:45" },
  ];
};

const SelectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: SelectedSongReducer,
});
