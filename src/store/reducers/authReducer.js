import { LOGIN, LOGOUT, SET_AUTH_ERROR } from '../actions/actionTypes';
import { updateState } from '../../utilities/updateState';

const initialState = {
	token: null,
	error: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return updateState(state, {
				token: action.token,
				error: null,
			});
		case LOGOUT:
			return updateState(state, {
				token: null,
				error: null,
			});
		case SET_AUTH_ERROR:
			return updateState(state, {
				error: action.error,
				token: null,
			});
		default:
			return state;
	}
};

export default authReducer;
