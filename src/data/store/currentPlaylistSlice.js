import { createSlice } from "@reduxjs/toolkit";

const currentPlaylistSlice = createSlice({
	name: "currentPlaylists",
	initialState: {
		currentPlaylists: []
	},
	reducers: {
		addCurrentPlaylist(state, action) {
			// const { dataPath, index } = action.payload;
			// console.log("dataPath, index:", dataPath, index);
			// console.log(dataPath.videos.data[0].video_file.data[0].url);

			const currentPlaylistVideos = action.payload.playlist_videos.map((videoData) => ({
				video_obj: videoData.video_obj,
				video_url: videoData.video_url,
				video_preview: videoData.video_preview,
				video_name: videoData.video_name,
				video_length: videoData.video_length,
				video_type: videoData.video_type,
				video_description: videoData.video_description,
				video_shop_link: videoData.video_shop_link,
				createdAt: videoData.createdAt
			}));

			state.currentPlaylists.push({
				currentPlaylist_videos: currentPlaylistVideos, // Push the currentPlaylistVideos array into the currentPlaylist object
				currentPlaylist_name: action.payload.playlist_name,
				currentPlaylist_type: action.payload.playlist_type,
				currentPlaylist_description: action.payload.playlist_description,
				createdAt: action.payload.createdAt
			});

			console.log("Updated currentPlaylists array:", state.currentPlaylists);
		},
		deleteCurrentPlaylist(state, action) {
			if (state.currentPlaylists.length > 0) {
				// Remove the last currentPlaylist from the array
				state.currentPlaylists.pop();
				console.log("Deleted currentPlaylist. Updated currentPlaylists array:", state.currentPlaylists);
			}
		},
		updateCurrentPlaylist(state, action) {
			const updatedcurrentPlaylist = action.payload; // Assuming action.payload contains the updated currentPlaylist data
			const currentPlaylistIndex = state.currentPlaylists.findIndex((currentPlaylist) => currentPlaylist.id === updatedcurrentPlaylist.id);

			if (currentPlaylistIndex !== -1) {
				// If the currentPlaylist with the provided ID exists in the state, update it
				state.currentPlaylists[currentPlaylistIndex] = {
					...state.currentPlaylists[currentPlaylistIndex],
					...updatedcurrentPlaylist
				};
				console.log("Updated currentPlaylist. Updated currentPlaylists array:", state.currentPlaylists);
			}
		},
		getcurrentPlaylist(state, action) {
			return state.currentPlaylists;
		}
	}
});

export const { addCurrentPlaylist, deleteCurrentPlaylist, updateCurrentPlaylist, getCurrentPlaylist } = currentPlaylistSlice.actions;

export default currentPlaylistSlice.reducer;
