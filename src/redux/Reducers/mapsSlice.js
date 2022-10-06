import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	mapInfo: {
		latitude: '',
		longitude: '',
	},
};
export const mapsSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		mapAction: (state, actions) => {
			state.mapInfo = actions.payload;
		},
	},
});

export const { mapAction } = mapsSlice.actions;
export default mapsSlice.reducer;
