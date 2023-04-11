import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: string;
}

const DEFAULT_STATE: UserWithId[] = [
	{
		id: "1FFxpE2854356-EF11",
		name: "Peter Doe",
		email: "Peter.Doe@gmail.com",
		github: "oscarrondon",
	},
	{
		id: "2FFxpE2854356-EF12",
		name: "Lena Whitehouse",
		email: "Lena.Whitehouse@gmail.com",
		github: "Lena.Whitehouse",
	},
	{
		id: "3FFxpE2854356-EF13",
		name: "Phil Less",
		email: "Phil.Less@gmail.com",
		github: "leo",
	},
	{
		id: "4FFxpE2854356-EF14",
		name: "John Camper",
		email: "John.Camper@gmail.com",
		github: "midudev",
	},
];

const initialState: UserWithId[] = ((): UserWithId[] => {
	const persistanceState = window.localStorage.getItem("__redux__state__");
	return persistanceState ? JSON.parse(persistanceState).users : DEFAULT_STATE;
})();

export const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			state.push({ id, ...action.payload });
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
		rollbackUser: (state, action: PayloadAction<UserWithId>) => {
			const isUserAlreadyDefined = state.some(
				(user) => user.id === action.payload.id,
			);
			if (!isUserAlreadyDefined) {
				state.push(action.payload);
			}
		},
	},
});

export default userSlice.reducer;

export const { addNewUser, deleteUserById, rollbackUser } = userSlice.actions;
