import { IMessage } from '../../interfaces/IMessage';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IMessage = {
	id: null,
	name: null
}

const messageSlice = createSlice({
	name: 'message',
	initialState,
	reducers: {
		setMessage: (state, action: PayloadAction<IMessage>) => {
			state.id = action.payload.id
			state.name = action.payload.name
		},
	}
})

export const { setMessage } = messageSlice.actions;

export default messageSlice.reducer