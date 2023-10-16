import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
	name: "videos",
	initialState: {
		videos: []
	},
	reducers: {
		addVideo(state, action) {
			const { data, index } = action.payload;
			const videoIdToAdd = data.id;

			// Check if a video with the same video_id already exists in state
			const existingVideo = state.videos.find((video) => video.video_id === videoIdToAdd);

			if (!existingVideo) {
				state.videos.push({
					video_obj: data.attributes.video_file,
					video_url: data.attributes.video_file.data[0].attributes.url,
					video_preview: data.attributes.video_preview.data.attributes.url,
					video_name: data.attributes.video_name,
					video_length: data.attributes.video_length,
					video_type: data.attributes.video_type,
					video_description: data.attributes.video_description,
					video_likes: data.attributes.video_likes,
					video_dislikes: data.attributes.video_dislikes,
					video_views: data.attributes.video_views,
					video_shop_link: data.attributes.video_shop_link,
					video_id: data.id,
					createdAt: data.attributes.createdAt,
					video_creator_avatar: data.attributes.video_creator.data.attributes.user_avatar.data.attributes.url,
					video_creator_username: data.attributes.video_creator.data.attributes.username,
					video_creator_id: data.attributes.video_creator.data.id
				});
			}
		},
		deleteVideo(state, action) {
			const videoIdToDelete = action.payload;
			const videoIndex = state.videos.findIndex((video) => video.video_id === videoIdToDelete);

			if (videoIndex !== -1) {
				// If the video with the provided ID exists in the state, remove it
				state.videos.splice(videoIndex, 1);
			}
		},
		updateVideo(state, action) {
			const updatedUser = action.payload; // Assuming action.payload contains the updated user data
			const userIndex = state.videos.findIndex((user) => user.id === updatedUser.id);

			if (userIndex !== -1) {
				// If the user with the provided ID exists in the state, update it
				state.videos[userIndex] = {
					...state.videos[userIndex],
					...updatedUser
				};
			}
		},
		getVideo(state, action) {
			return state.videos;
		}
	}
});

export const { addVideo, deleteVideo, updateVideo, getVideo } = videoSlice.actions;

export default videoSlice.reducer;
