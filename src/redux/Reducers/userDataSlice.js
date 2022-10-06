import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	users: [],
};
export const userDataSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		addUserAction: (state, actions) => {
			const userId = state.users.length + 1;
			const newUser = { id: userId, ...actions.payload };
			state.users.push(newUser);
		},
	},
});

export const { addUserAction } = userDataSlice.actions;
export default userDataSlice.reducer;
