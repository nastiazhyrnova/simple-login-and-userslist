import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import User from './User';
import Pagination from './Pagination';

import { fetchUsers } from '../../store/actions';

const UsersStyle = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 700px;
	margin: 0 auto;
	gap: 1rem;
`;

const Users = () => {
	const dispatch = useDispatch();
	const usersData = useSelector(state => state.users);
	const [currentPage, setCurrentPage] = useState(1);

	let users = 'No users found';

	useEffect(() => {
		dispatch(fetchUsers(currentPage));
		window.scroll(0, 0);
	}, [currentPage, dispatch]);

	const goToPage = pageNumber => setCurrentPage(pageNumber);

	if (usersData.users.length > 0) {
		users = usersData.users.map(user => <User user={user} key={user.id} />);
	}

	return (
		<>
			<UsersStyle>{users}</UsersStyle>
			{usersData.users.length > 0 && (
				<Pagination
					currentPage={currentPage}
					totalPages={usersData.totalPages}
					goToPage={goToPage}
				/>
			)}
		</>
	);
};

export default Users;
