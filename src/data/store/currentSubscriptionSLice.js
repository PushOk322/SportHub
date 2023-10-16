import { createSlice } from "@reduxjs/toolkit";

const currentSubscriptionSlice = createSlice({
	name: "currentSubscriptions",
	initialState: {
		currentSubscriptions: []
	},
	reducers: {
        addCurrentSubscription(state, action) {
            console.log("🚀state, action:", state, action)
            if (state.currentSubscriptions.length > 0) {
				// Remove the last user from the array
				state.currentSubscriptions.pop();
				console.log("🚀 ~ file: currentSubscriptionSLice.js:14 ~ addCurrentSubscription ~ state.currentSubscriptions:", state.currentSubscriptions)
				// console.log("🚀 ~ file: userSlice.js:30 ~ logoutUser ~ state.users:", state.users);
				
			}
			state.currentSubscriptions.push({
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

				user_avatar: action.payload.user_avatar,

				user_cover: action.payload.user_cover,
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

			//console.log("Updated currentSubscriptions array:", state.currentSubscriptions);
		},
		deleteCurrentSubscription(state, action) {
			if (state.currentSubscriptions.length > 0) {
				// Remove the last currentSubscription from the array
				state.currentSubscriptions.pop();
				//console.log("Deleted currentSubscription. Updated currentSubscriptions array:", state.currentSubscriptions);
			}
		},
		updateCurrentSubscription(state, action) {
			const updatedcurrentSubscription = action.payload; // Assuming action.payload contains the updated currentSubscription data
			const currentSubscriptionIndex = state.currentSubscriptions.findIndex((currentSubscription) => currentSubscription.id === updatedcurrentSubscription.id);

			if (currentSubscriptionIndex !== -1) {
				// If the currentSubscription with the provided ID exists in the state, update it
				state.currentSubscriptions[currentSubscriptionIndex] = {
					...state.currentSubscriptions[currentSubscriptionIndex],
					...updatedcurrentSubscription
				};
				//console.log("Updated currentSubscription. Updated currentSubscriptions array:", state.currentSubscriptions);
			}
		},
		getcurrentSubscription(state, action) {
			return state.currentSubscriptions;
		}
	}
});

export const { addCurrentSubscription, deleteCurrentSubscription, updateCurrentSubscription, getCurrentSubscription } = currentSubscriptionSlice.actions;

export default currentSubscriptionSlice.reducer;
