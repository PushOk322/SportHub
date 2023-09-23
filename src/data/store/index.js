import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import videoReducer from "./videoSlice.js";
import playlistReducer from "./playlistSlice.js";
import currentPlaylistReducer from "./currentPlaylistSlice.js";

export default configureStore({
    reducer: {
        users: userReducer,
        videos: videoReducer,
        playlists: playlistReducer,
        currentPlaylists: currentPlaylistReducer,
    },
});
