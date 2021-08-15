import styled from 'styled-components';

const CardStyle = styled.div`
	background-color: var(--main-white-color);
	margin: 0 auto;
	max-width: ${props => (props.maxWidth ? props.maxWidth : '400px')};
	width: ${props => (props.width ? props.width : null)};
	padding: 1.5rem;
	border-radius: 1rem;
	text-align: ${props => (props.centered ? 'center' : 'left')};

	@media (max-width: 588px) {
		width: 90%;
	}
`;

const Card = props => {
	return <CardStyle {...props}>{props.children}</CardStyle>;
};

export default Card;
