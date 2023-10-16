import { createSlice } from "@reduxjs/toolkit";

const userViewLaterSlice = createSlice({
	name: "userViewLaters",
	initialState: {
		userViewLaters: []
	},
	reducers: {
		addUserViewLater(state, action) {
			const { data, index } = action.payload;
			// console.log("data, index:", data, index);

			const existingIndex = state.userViewLaters.findIndex((item) => item.video_id === data.id);

			if (existingIndex !== -1) {
				// If it exists, update the existing object
				state.userViewLaters[existingIndex] = {
					...state.userViewLaters[existingIndex],
					// Update the properties as needed
					// For example:
					video_name: data.video_name,
					video_description: data.video_description
					// Add other properties you want to update
				};
			} else {
				// If it doesn't exist, push a new object
				state.userViewLaters.push({
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
					video_creator_username: data.video_creator.username
				});
			}
		},
		deleteUserViewLater(state, action) {
			if (state.userViewLaters.length > 0) {
				// Remove the last user from the array
				state.userViewLaters.pop();
				// console.log("🚀 ~ file: videoSlice.js:30 ~ logoutUser ~ state.videos:", state.videos);
			}
		},
		updateUserViewLater(state, action) {
			const updatedUser = action.payload; // Assuming action.payload contains the updated user data
			const userIndex = state.userViewLaters.findIndex((user) => user.id === updatedUser.id);

			if (userIndex !== -1) {
				// If the user with the provided ID exists in the state, update it
				state.userViewLaters[userIndex] = {
					...state.userViewLaters[userIndex],
					...updatedUser
				};
			}
		},
		getUserViewLater(state, action) {
			return state.userViewLaters;
		}
	}
});

export const { addUserViewLater, deleteUserViewLater, updateUserViewLater, getUserViewLater } = userViewLaterSlice.actions;

export default userViewLaterSlice.reducer;
