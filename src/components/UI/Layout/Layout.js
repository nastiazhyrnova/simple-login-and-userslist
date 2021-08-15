import styled from 'styled-components';

import Header from './Header/Header';
import Footer from './Footer/Footer';

const Main = styled.main`
	padding: 1rem;
	flex: ${props => (props.centered ? '0' : 'auto')};
`;

const Layout = props => {
	return (
		<>
			<Header />
			<Main centered={props.centered}>{props.children}</Main>
			<Footer />
		</>
	);
};

export default Layout;
