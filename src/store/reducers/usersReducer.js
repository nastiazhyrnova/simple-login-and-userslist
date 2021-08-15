import { SET_USERS_DATA } from '../actions/actionTypes';

const initialState = {
	users: [],
	totalPages: 1,
	currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS_DATA:
			return {
				users: action.users,
				totalPages: action.totalPages,
				currentPage: action.currentPage,
			};
		default:
			return state;
	}
};

export default usersReducer;
