import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import Button from '../../Button';

import { logout } from '../../../../store/actions/index';
import {
	navbarStyles,
	navbarContainerStyles,
} from '../../../styles/navbarStyles';
import logo from '../../../../assets/logo.svg';

const HeaderStyle = styled.header`
	${navbarStyles};
	position: sticky;
	top: 0;
	background-color: var(--main-white-color);
	filter: drop-shadow(0px 1px 5px rgba(51, 3, 0, 0.1));
`;
const HeaderContainer = styled.div`
	${navbarContainerStyles}
	justify-content: space-between;
`;
const Logo = styled.img`
	height: 100%;
	cursor: pointer;
`;

const Header = () => {
	const auth = useSelector(state => state.auth);

	const dispatch = useDispatch();
	const history = useHistory();

	const logoutHandler = () => {
		dispatch(logout());
		history.push('/');
	};

	return (
		<HeaderStyle>
			<HeaderContainer>
				<Logo src={logo} onClick={() => history.push('/')} />
				{auth.token ? (
					<Button width='fit-content' onClick={logoutHandler}>
						Cerrar Sesión
					</Button>
				) : (
					<Button width='fit-content' onClick={_ => history.push('/login')}>
						Iniciar Sesión
					</Button>
				)}
			</HeaderContainer>
		</HeaderStyle>
	);
};

export default Header;
