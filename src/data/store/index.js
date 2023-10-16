import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import videoReducer from "./videoSlice.js";
import playlistReducer from "./playlistSlice.js";
import currentPlaylistReducer from "./currentPlaylistSlice.js";
import storeReducer from "./storeSlice.js";
import userViewLaterReducer from "./userViewLaterSlice.js";
import userLatestReducer from "./userLatestSlice.js";
import currentSubscriptionReducer from "./currentSubscriptionSLice.js";
import currentVideoReducer from "./currentVideoSlice.js";
import commentReducer from "./commentSlice.js";
import userSignReducer from "./userSIgnSlice.js";

export default configureStore({
    reducer: {
        users: userReducer,
        userSign: userSignReducer,
        videos: videoReducer,
        playlists: playlistReducer,
        currentPlaylists: currentPlaylistReducer,
        stores: storeReducer,
        userViewLaters: userViewLaterReducer,
        userLatests: userLatestReducer,
        currentSubscriptions: currentSubscriptionReducer,
        currentVideos: currentVideoReducer,
        comments: commentReducer,
    },
});
