import { css } from 'styled-components';

const blockElementStyles = css`
	width: ${props => (props.width ? props.width : '100%')};
	padding: 0.75rem;
	font-size: 1rem;
	margin: 0.5rem 0;
	border-radius: 0.5rem;
`;

export default blockElementStyles;
