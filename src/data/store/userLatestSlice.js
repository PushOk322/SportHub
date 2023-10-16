import { createSlice } from "@reduxjs/toolkit";

const userLatestSlice = createSlice({
	name: "userLatests",
	initialState: {
		userLatests: []
	},
	reducers: {
		addUserLatest(state, action) {
			const { data, index } = action.payload;
			// console.log("data, index:", data, index);
			const existingIndex = state.userLatests.findIndex(
				(item) => item.video_id === data.id
			);
	
			if (existingIndex !== -1) {
				// If it exists, update the existing object
				state.userLatests[existingIndex] = {
					...state.userLatests[existingIndex],
					// Update the properties as needed
					// For example:
					video_name: data.video_name,
					video_description: data.video_description,
					// Add other properties you want to update
				};
			} else {
				// If it doesn't exist, push a new object
				state.userLatests.push({
					video_obj: data.video_file,
					video_url: data.video_file[0].url,
					video_preview: data.video_preview.url,
					video_name: data.video_name,
					video_length: data.video_length,
					video_type: data.video_type,
					video_description: data.video_description,
					video_shop_link: data.video_shop_link,
					video_id: data.id,
					createdAt: data.createdAt,
					video_creator_avatar: data.video_creator.user_avatar.url,
					video_creator_username: data.video_creator.username,
				});
			}
		},
		deleteUserLatest(state, action) {
			if (state.userLatests.length > 0) {
				// Remove the last user from the array
				state.userLatests.pop();
				// console.log("🚀 ~ file: videoSlice.js:30 ~ logoutUser ~ state.videos:", state.videos);
			}
		},
		updateUserLatest(state, action) {
			const updatedUser = action.payload; // Assuming action.payload contains the updated user data
			const userIndex = state.userLatests.findIndex((user) => user.id === updatedUser.id);

			if (userIndex !== -1) {
				// If the user with the provided ID exists in the state, update it
				state.userLatests[userIndex] = {
					...state.userLatests[userIndex],
					...updatedUser
				};
			}
		},
		getUserLatest(state, action) {
			return state.userLatests;
		}
	}
});

export const { addUserLatest, deleteUserLatest, updateUserLatest, getUserLatest } = userLatestSlice.actions;

export default userLatestSlice.reducer;
