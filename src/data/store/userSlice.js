import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "users",
	initialState: {
		users: []
	},
	reducers: {
		loginUser(state, action) {
			console.log("🚀 ~ file: userSlice.js:10 ~ loginUser ~ action:", action);
			console.log("🚀 ~ file: userSlice.js:10 ~ loginUser ~ state:", state);

			state.users.push({
				blocked: action.payload.user.blocked,
				confirmed: action.payload.user.confirmed,
				createdAt: action.payload.user.createdAt,
				customer_role: action.payload.user.customer_role,
				date_of_birth: action.payload.user.date_of_birth,
				email: action.payload.user.email, 
				id: action.payload.user.id,
				provider: action.payload.user.provider,
				updatedAt: action.payload.user.updatedAt,
				user_gender: action.payload.user.user_gender,
				user_avatar: action.payload.user.user_avatar,
				username: action.payload.user.username,

				jwt: action.payload.jwt
			});

			// console.log("🚀 ~ file: userSlice.js:7 ~ users:", users)
		},
		logoutUser(state, action) {
			if (state.users.length > 0) {
				// Remove the last user from the array
				state.users.pop();
				console.log("🚀 ~ file: userSlice.js:30 ~ logoutUser ~ state.users:", state.users);
			}
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
