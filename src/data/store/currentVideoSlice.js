import { createSlice } from "@reduxjs/toolkit";

const currentVideoSlice = createSlice({
	name: "currentVideos",
	initialState: {
		currentVideos: []
	},
	reducers: {
		addCurrentVideo(state, action) {
			if (state.currentVideos.length > 0) {
				// Remove the last currentVideo from the array
				state.currentVideos.pop();
				//console.log("Deleted currentVideo. Updated currentVideos array:", state.currentVideos);
			}
			state.currentVideos.push({
				video_obj: action.payload.video_obj,
				video_url: action.payload.video_url,
				video_preview: action.payload.video_preview,
				video_name: action.payload.video_name,
				video_length: action.payload.video_length,
				video_type: action.payload.video_type,
				video_description: action.payload.video_description,
				video_likes: action.payload.video_likes,
				video_dislikes: action.payload.video_dislikes,
				video_views: action.payload.video_views,
				video_shop_link: action.payload.video_shop_link,
				video_id: action.payload.video_id,
				createdAt: action.payload.createdAt,
				video_creator_avatar: action.payload.video_creator_avatar,
				video_creator_username: action.payload.video_creator_username,
				video_creator_id: action.payload.video_creator_id
			});

			//console.log("Updated currentVideos array:", state.currentVideos);
		},
		deleteCurrentVideo(state, action) {
			if (state.currentVideos.length > 0) {
				// Remove the last currentVideo from the array
				state.currentVideos.pop();
				//console.log("Deleted currentVideo. Updated currentVideos array:", state.currentVideos);
			}
		},
		updateCurrentVideo(state, action) {
			const updatedcurrentVideo = action.payload; // Assuming action.payload contains the updated currentVideo data
			const currentVideoIndex = state.currentVideos.findIndex((currentVideo) => currentVideo.id === updatedcurrentVideo.id);

			if (currentVideoIndex !== -1) {
				// If the currentVideo with the provided ID exists in the state, update it
				state.currentVideos[currentVideoIndex] = {
					...state.currentVideos[currentVideoIndex],
					...updatedcurrentVideo
				};
				//console.log("Updated currentVideo. Updated currentVideos array:", state.currentVideos);
			}
		},
		getcurrentVideo(state, action) {
			return state.currentVideos;
		}
	}
});

export const { addCurrentVideo, deleteCurrentVideo, updateCurrentVideo, getCurrentVideo } = currentVideoSlice.actions;

export default currentVideoSlice.reducer;
