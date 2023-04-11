import { useAppDispatch } from "../hooks/store";
import { UserId, deleteUserById } from "../store/users/slice";

export const useUserAction = () => {
	const dispatch = useAppDispatch();

	const removeUser = (id: UserId) => {
		dispatch(deleteUserById(id));
	};

	return { removeUser };
};
