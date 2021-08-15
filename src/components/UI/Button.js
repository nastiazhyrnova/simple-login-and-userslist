import styled from 'styled-components';

import blockElementStyles from '../styles/blockElementStyles';

const ButtonStyle = styled.button`
	${blockElementStyles}
	border: 2px solid var(--accent-color);
	background-color: var(--accent-color);
	color: var(--main-white-color);
	cursor: pointer;
	padding-left: 1.25rem;
	padding-right: 1.25rem;

	&:hover {
		background-color: var(--main-white-color);
		color: var(--accent-color);
	}
`;

const Button = props => {
	return (
		<ButtonStyle {...props}>
			<span>{props.children}</span>
		</ButtonStyle>
	);
};

export default Button;
