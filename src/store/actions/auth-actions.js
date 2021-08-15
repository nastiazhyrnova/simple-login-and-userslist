import * as actionTypes from './actionTypes';

export const login = (email, password) => async dispatch => {
	dispatch({ type: actionTypes.LOADING_START });
	const postData = async (email, password) => {
		const response = await fetch('https://reqres.in/api/login', {
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		return await response.json();
	};
	try {
		const data = await postData(email, password);
		if (data.token) {
			dispatch({ type: actionTypes.LOGIN, token: data.token });
			localStorage.setItem('authToken', data.token);
		} else {
			dispatch({ type: actionTypes.SET_AUTH_ERROR, error: data.error });
		}
		dispatch({ type: actionTypes.LOADING_END });
	} catch (err) {
		throw new Error(err);
	}
};

export const logout = () => dispatch => {
	dispatch({ type: actionTypes.LOADING_START });
	localStorage.removeItem('authToken');
	dispatch({ type: actionTypes.LOGOUT });
	dispatch({ type: actionTypes.LOADING_END });
};

export const checkAuth = () => dispatch => {
	dispatch({ type: actionTypes.LOADING_START });
	const token = localStorage.getItem('authToken');
	if (token) {
		dispatch({ type: actionTypes.LOGIN, token });
	}
	dispatch({ type: actionTypes.LOADING_END });
};
