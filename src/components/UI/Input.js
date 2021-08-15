import { forwardRef } from 'react';
import styled from 'styled-components';

import blockElementStyles from '../styles/blockElementStyles';

const InputStyle = styled.input`
	${blockElementStyles}
	border: 1px solid var(--mid-grey-color);
	outline: none;

	&::placeholder {
		color: var(--mid-grey-color);
	}

	&:focus {
		border: 1px solid var(--dark-grey-color);
	}
`;

const Input = forwardRef((props, ref) => {
	return (
		<>
			<InputStyle {...props} ref={ref} />
		</>
	);
});

export default Input;
