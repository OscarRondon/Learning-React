import { User, UserId, addNewUser, deleteUserById } from "../store/users/slice";
import { useAppDispatch, useAppSelector } from "./useStore";

export const useUserAction = () => {
	const users = useAppSelector((state) => state.users);
	const dispatch = useAppDispatch();

	const removeUser = (id: UserId) => {
		dispatch(deleteUserById(id));
	};

	const addUser = ({ name, email, github }: User) => {
		dispatch(addNewUser({ name, email, github }));
	};

	return { users, addUser, removeUser };
};
