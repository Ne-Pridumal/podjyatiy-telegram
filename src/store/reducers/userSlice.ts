import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserGoogle } from "../../interfaces/IUser";

const initialState: IUserGoogle = {
	uid: '',
	displayName: '',
	email: '',
	photo: '',
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<IUserGoogle>) => {
			state.uid = action.payload.uid
			state.photo = action.payload.photo
			state.displayName = action.payload.displayName
			state.email = action.payload.email
		},
		logout: (state) => {
			state.uid = null;
		}
	}
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer