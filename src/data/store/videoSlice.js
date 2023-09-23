import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
	name: "videos",
	initialState: {
		videos: []
	},
	reducers: {
		addVideo(state, action) {
			const { data, index } = action.payload;
			console.log("data, index:", data, index);
			

			state.videos.push({
				video_obj: data.attributes.video_file,
				video_url: data.attributes.video_file.data[0].attributes.url,
				video_preview: data.attributes.video_preview.data.attributes.url,
				video_name: data.attributes.video_name,
				video_length: data.attributes.video_length,
				video_type: data.attributes.video_type,
				video_description: data.attributes.video_description,
				video_shop_link: data.attributes.video_shop_link,
				video_id: data.attributes.video_file.data[0].id,
				createdAt: data.attributes.createdAt
			});
		},
		deleteVideo(state, action) {
			if (state.videos.length > 0) {
				// Remove the last user from the array
				state.videos.pop();
				console.log("🚀 ~ file: videoSlice.js:30 ~ logoutUser ~ state.videos:", state.videos);
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
