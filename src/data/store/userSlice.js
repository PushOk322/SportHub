import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "users",
	initialState: {
		users: []
	},
	reducers: {
		loginUser(state, action) {
			// console.log("🚀 ~ file: userSlice.js:10 ~ loginUser ~ action:", action);
			// console.log("🚀 ~ file: userSlice.js:10 ~ loginUser ~ state:", state);
			if (state.users.length > 0) {
				// Remove the last user from the array
				state.users.pop();
				// console.log("🚀 ~ file: userSlice.js:30 ~ logoutUser ~ state.users:", state.users);
				
			}
			state.users.push({
				blocked: action.payload.blocked,
				confirmed: action.payload.confirmed,
				createdAt: action.payload.createdAt,
				customer_role: action.payload.customer_role,
				date_of_birth: action.payload.date_of_birth,
				email: action.payload.email, 
				id: action.payload.id,
				provider: action.payload.provider,
				updatedAt: action.payload.updatedAt,
				user_gender: action.payload.user_gender,
				username: action.payload.username,

				
				user_avatar: action.payload.user_avatar.url,

				user_cover: action.payload.user_cover.url,
				user_first_name: action.payload.user_first_name,
				user_last_name: action.payload.user_last_name,
				user_address: action.payload.user_address,
				user_LLC: action.payload.user_LLC,
				user_description: action.payload.user_description,
				user_vimeo: action.payload.user_vimeo,
				user_instagram: action.payload.user_instagram,
				user_facebook: action.payload.user_facebook,
				user_twitter: action.payload.user_twitter,


				jwt: action.payload.jwt
			});
			
		},
		logoutUser(state, action) {
			
		},
		updateUser(state, action) {
			const updatedUser = action.payload; // Assuming action.payload contains the updated user data
			const userIndex = state.users.findIndex((user) => user.id === updatedUser.id);

			if (userIndex !== -1) {
				// If the user with the provided ID exists in the state, update it
				state.users[userIndex] = {
					...state.users[userIndex],
					...updatedUser
				};
			}
		},
		getUser(state, action) {
			return state.users;
		}
	}
});

export const { loginUser, logoutUser, updateUser, getUser } = userSlice.actions;

export default userSlice.reducer;
