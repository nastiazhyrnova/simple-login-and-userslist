import { LOADING_START, LOADING_END } from './actionTypes';

export const startLoading = () => dispatch => {
	dispatch({
		type: LOADING_START,
	});
};
export const stopLoading = () => dispatch => {
	dispatch({
		type: LOADING_END,
	});
};
