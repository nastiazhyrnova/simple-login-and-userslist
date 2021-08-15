import * as actionTypes from './actionTypes';

export const fetchUsers =
	(pageNumber = 1) =>
	async dispatch => {
		dispatch({ type: actionTypes.LOADING_START });
		const getData = async pageNumber => {
			const response = await fetch(
				`https://reqres.in/api/users?page=${pageNumber}`
			);
			return await response.json();
		};

		try {
			const data = await getData(pageNumber);
			dispatch({
				type: actionTypes.SET_USERS_DATA,
				users: data.data,
				totalPages: data.total_pages,
				currentPage: data.page,
			});
		} catch (err) {
			throw new Error(err);
		}
		dispatch({ type: actionTypes.LOADING_END });
	};
