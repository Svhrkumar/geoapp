import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Reducers/counterSlice';
import userDataReducer from './Reducers/userDataSlice';
import mapsDataReducer from './Reducers/mapsSlice';
export const store = configureStore({
	reducer: {
		counter: counterReducer,
		userInfo: userDataReducer,
		mapsInfo: mapsDataReducer,
	},
});
