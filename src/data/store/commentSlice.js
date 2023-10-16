import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
	name: "comments",
	initialState: {
		comments: []
	},
	reducers: {
		addComment(state, action) {
			const { dataPath, index } = action.payload;
			console.log("data, index:", dataPath, index);
			

			state.comments.push({
				comment_id: dataPath.id,
                comment_text: dataPath.attributes.comment_text,
                comment_likes: dataPath.attributes.comment_likes,
                comment_dislikes: dataPath.attributes.comment_dislikes,
                comment_author_avatar: dataPath.attributes.comment_author.data.attributes.user_avatar.data.attributes.url,
                comment_author_name: dataPath.attributes.comment_author.data.attributes.username,

                comment_replies: dataPath.attributes.comment_replies
                
			});
		},
		deleteComment(state, action) {
			if (state.comments.length > 0) {
				// Remove the last user from the array
				state.comments.pop();
				// console.log("🚀 ~ file: commentSlice.js:30 ~ logoutUser ~ state.comments:", state.comments);
			}
		},
		updateComment(state, action) {
			const updatedUser = action.payload; // Assuming action.payload contains the updated user data
			const userIndex = state.comments.findIndex((user) => user.id === updatedUser.id);

			if (userIndex !== -1) {
				// If the user with the provided ID exists in the state, update it
				state.comments[userIndex] = {
					...state.comments[userIndex],
					...updatedUser
				};
			}
		},
		getComment(state, action) {
			return state.comments;
		}
	}
});

export const { addComment, deleteComment, updateComment, getComment } = commentSlice.actions;

export default commentSlice.reducer;
