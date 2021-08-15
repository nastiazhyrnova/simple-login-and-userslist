import styled from 'styled-components';

import Layout from '../components/UI/Layout/Layout';
import Users from '../components/Users/Users';

const Title = styled.h1`
	text-align: center;
	padding: 1rem 0 2rem 0;
`;

const UsersPage = () => {
	return (
		<Layout>
			<Title>Nuestro equipo</Title>
			<Users />
		</Layout>
	);
};

export default UsersPage;
