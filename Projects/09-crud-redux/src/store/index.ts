import { Middleware, configureStore } from "@reduxjs/toolkit";
import { toast } from "sonner";
import usersReducer, { UserWithId, rollbackUser } from "./users/slice";

const persistanceLocalStorageMidleware: Middleware =
	(store) => (next) => (action) => {
		// console.log(store.getState());
		// console.log(action);
		next(action);
		// console.log(store.getState());
		window.localStorage.setItem(
			"__redux__state__",
			JSON.stringify(store.getState()),
		);
	};

const syncWithDatabase: Middleware = (store) => (next) => (action) => {
	// console.log(store);
	// console.log(action);
	// next(action);
	// console.log(store);
	const { type, payload } = action;
	// console.log(type)
	// console.log(payload)
	const previousState = store.getState();
	next(action);

	if (type === "users/deleteUserById") {
		// <- eliminado un usuario
		const userIdToRemove = payload;
		const userToRemove = previousState.users.find(
			(user: UserWithId) => user.id === userIdToRemove,
		);

		fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
			method: "DELETE",
		})
			.then((res) => {
				// if (res.ok) {
				// 	toast.success(`Usuario ${payload} eliminado correctamente`)
				// }
				throw new Error("Error al eliminar el usuario");
			})
			.catch((err) => {
				toast.error(`Error deleting user ${userIdToRemove}`);
				if (userToRemove) store.dispatch(rollbackUser(userToRemove));
				console.log(err);
				console.log("error");
			});
	}
};

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: [persistanceLocalStorageMidleware, syncWithDatabase],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
