import { createSlice } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
	name: "playlists",
	initialState: {
		playlists: []
	},
	reducers: {
		addPlaylist(state, action) {
			const { dataPath, index } = action.payload;
			const playlistIdToAdd = dataPath.id;

			// Check if a playlist with the same playlist_id already exists in state
			const existingPlaylist = state.playlists.find((playlist) => playlist.playlist_id === playlistIdToAdd);

			if (!existingPlaylist) {
				const playlistVideos = dataPath.attributes.videos.data.map((videoData) => ({
					video_obj: videoData.attributes.video_file,
					video_url: videoData.attributes.video_file.data[0].attributes.url,
					video_preview: videoData.attributes.video_preview.data.attributes.url,
					video_name: videoData.attributes.video_name,
					video_length: videoData.attributes.video_length,
					video_type: videoData.attributes.video_type,
					video_description: videoData.attributes.video_description,
					video_shop_link: videoData.attributes.video_shop_link,
					createdAt: videoData.attributes.createdAt
				}));

				state.playlists.push({
					playlist_videos: playlistVideos,
					playlist_name: dataPath.attributes.playlist_name,
					playlist_type: dataPath.attributes.playlist_type,
					playlist_description: dataPath.attributes.playlist_description,
					playlist_id: dataPath.id,
					createdAt: dataPath.attributes.createdAt
				});
			}
		},
		deletePlaylist(state, action) {
			if (state.playlists.length > 0) {
				// Remove the last playlist from the array
				state.playlists.pop();
				// console.log("Deleted playlist. Updated playlists array:", state.playlists);
			}
		},
		updatePlaylist(state, action) {
			const updatedPlaylist = action.payload; // Assuming action.payload contains the updated playlist data
			const playlistIndex = state.playlists.findIndex((playlist) => playlist.id === updatedPlaylist.id);

			if (playlistIndex !== -1) {
				// If the playlist with the provided ID exists in the state, update it
				state.playlists[playlistIndex] = {
					...state.playlists[playlistIndex],
					...updatedPlaylist
				};
				// console.log("Updated playlist. Updated playlists array:", state.playlists);
			}
		},
		getPlaylist(state, action) {
			return state.playlists;
		}
	}
});

export const { addPlaylist, deletePlaylist, updatePlaylist, getPlaylist } = playlistSlice.actions;

export default playlistSlice.reducer;
