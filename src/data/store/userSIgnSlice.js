import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "userSign",
	initialState: {
		userSign: []
	},
	reducers: {
		loginUserSign(state, action) {
			// console.log("🚀 ~ file: userSlice.js:10 ~ loginUserSign ~ action:", action);
			// console.log("🚀 ~ file: userSlice.js:10 ~ loginUserSign ~ state:", state);
			if (state.userSign.length > 0) {
				// Remove the last user from the array
				state.userSign.pop();
				// console.log("🚀 ~ file: userSlice.js:30 ~ logoutUserSign ~ state.users:", state.users);
				
			}
			state.userSign.push({
				jwt: action.payload.jwt,
				username: action.payload.user.username,
				user_id: action.payload.user.id,
				user_email: action.payload.user.user_email,
			});
			
		},
		logoutUserSign(state, action) {
			
		},
		updateUserSign(state, action) {
			const updatedUserSign = action.payload; // Assuming action.payload contains the updated user data
			const userIndex = state.users.findIndex((user) => user.id === updatedUserSign.id);

			if (userIndex !== -1) {
				// If the user with the provided ID exists in the state, update it
				state.users[userIndex] = {
					...state.users[userIndex],
					...updatedUserSign
				};
			}
		},
		getUserSign(state, action) {
			return state.users;
		}
	}
});

export const { loginUserSign, logoutUserSign, updateUserSign, getUserSign } = userSlice.actions;

export default userSlice.reducer;
