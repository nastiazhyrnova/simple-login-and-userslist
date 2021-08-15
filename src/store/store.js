import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './reducers/authReducer';
import loadingReducer from './reducers/loadingReducer';
import usersReducer from './reducers/usersReducer';

const reducers = combineReducers({
	auth: authReducer,
	loading: loadingReducer,
	users: usersReducer,
});

const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
