import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import { GlobalStyle } from './components/styles/GlobalStyle';

import Loader from './components/UI/Loader';
import LoginPage from './pages/LoginPage';
import UsersPage from './pages/UsersPage';
import NotFoundPage from './pages/NotFoundPage';

import { checkAuth } from './store/actions/index';

const App = () => {
	const auth = useSelector(state => state.auth);
	const loading = useSelector(state => state.loading);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkAuth());
	}, [dispatch]);

	return (
		<>
			<GlobalStyle />
			{loading && <Loader />}

			<Switch>
				<Route path='/' exact>
					<Redirect to='/login' />
				</Route>
				{auth.token ? (
					<Route path='/login' exact>
						<Redirect to='/users' />
					</Route>
				) : (
					<Route path='/login' exact>
						<LoginPage />
					</Route>
				)}
				{auth.token ? (
					<Route path='/users' exact>
						<UsersPage />
					</Route>
				) : (
					<Route path='/users' exact>
						<Redirect to='/login' />
					</Route>
				)}
				<Route path='/404'>
					<NotFoundPage />
				</Route>
				<Route path='*'>
					<Redirect to='/404' />
				</Route>
			</Switch>
		</>
	);
};

export default App;
