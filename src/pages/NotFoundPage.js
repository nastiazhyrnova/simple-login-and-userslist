import { useHistory } from 'react-router';

import styled from 'styled-components';

import Layout from '../components/UI/Layout/Layout';
import Button from '../components/UI/Button';

const Container = styled.div`
	text-align: center;

	& h1 {
		font-size: 8rem;
		color: var(--accent-color);
	}

	& p {
		font-size: 2rem;
		margin-bottom: 2rem;
	}
`;

const NotFoundPage = () => {
	const history = useHistory();
	return (
		<Layout centered>
			<Container>
				<h1>404</h1>
				<p>Oops! La página que buscas no está disponible</p>
				<Button width='auto' onClick={() => history.push('/')}>
					Ir al Inicio
				</Button>
			</Container>
		</Layout>
	);
};

export default NotFoundPage;
