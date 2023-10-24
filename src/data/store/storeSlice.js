import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
	name: "stores",
	initialState: {
		stores: []
	},
	reducers: {
		addStore(state, action) {
			const { dataPath, index } = action.payload;
			// console.log("data, index:", dataPath, index);
			const storeIdToAdd = data.id;

			// Check if a video with the same video_id already exists in state
			const existingStore = state.stores.find((store) => store.store_id === storeIdToAdd);
			if (!existingStore) {
				state.stores.push({
					store_preview: dataPath.attributes.store_preview.data[0].attributes.url,
					store_name: dataPath.attributes.store_name,
					store_description: dataPath.attributes.store_description,
					store_shop_link: dataPath.attributes.store_shop_link,
					store_id: dataPath.attributes.id,
					createdAt: dataPath.attributes.createdAt
				});
			}
		},
		deleteStore(state, action) {
			if (state.stores.length > 0) {
				// Remove the last user from the array
				state.stores.pop();
				// console.log("🚀 ~ file: storeSlice.js:30 ~ logoutUser ~ state.stores:", state.stores);
			}
		},
		updateStore(state, action) {
			const updatedUser = action.payload; // Assuming action.payload contains the updated user data
			const userIndex = state.stores.findIndex((user) => user.id === updatedUser.id);

			if (userIndex !== -1) {
				// If the user with the provided ID exists in the state, update it
				state.stores[userIndex] = {
					...state.stores[userIndex],
					...updatedUser
				};
			}
		},
		getStore(state, action) {
			return state.stores;
		}
	}
});

export const { addStore, deleteStore, updateStore, getStore } = storeSlice.actions;

export default storeSlice.reducer;
