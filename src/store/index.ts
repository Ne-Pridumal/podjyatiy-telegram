import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import userReducer from './reducers/userSlice';
import messageReducer from './reducers/messageSlice';

const rootReducer = combineReducers({
	user: userReducer,
	message: messageReducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		// middleware: (getDefaultMiddleware) =>
		// 	getDefaultMiddleware().concat(postAPI)
	})
}

export type rootState = ReturnType<typeof rootReducer>
export type AppDispatch = ReturnType<typeof setupStore>['dispatch'];
