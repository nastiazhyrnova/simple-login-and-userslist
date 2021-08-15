export const updateState = (prevState, newStateValues) => {
	return {
		...prevState,
		...newStateValues,
	};
};
