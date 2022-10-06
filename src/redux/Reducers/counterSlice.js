import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	count: 0,
};
export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (store) => {
			store.count += 1;
		},
		decrement: (store) => {
			store.count -= 1;
		},
	},
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
