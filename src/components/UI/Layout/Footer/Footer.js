import styled from 'styled-components';

import {
	navbarStyles,
	navbarContainerStyles,
} from '../../../styles/navbarStyles';

const FooterStyle = styled.footer`
	${navbarStyles};
	left: 0;
	bottom: 0;
	background-color: var(--main-bg-color);
`;

const FooterContainer = styled.div`
	${navbarContainerStyles}
	text-align: center;
	justify-content: center;
	font-size: 0.75rem;
	color: var(--dark-grey-color);
`;

const Footer = () => {
	return (
		<FooterStyle>
			<FooterContainer>2021 © Company Name</FooterContainer>
		</FooterStyle>
	);
};

export default Footer;
