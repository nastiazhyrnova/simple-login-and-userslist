import styled from 'styled-components';

import Card from '../UI/Card';

const Avatar = styled.div`
	width: 150px;
	height: 150px;
	overflow: hidden;
	border-radius: 50%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	margin-bottom: 1rem;

	& img {
		height: 100%;
		width: auto;
		margin: 0 auto;
	}
`;

const Name = styled.h4`
	padding-bottom: 0.5rem;
	color: var(--accent-color);
`;

const Email = styled.a`
	display: block;
`;

const User = props => {
	return (
		<Card width='48%' centered>
			<Avatar>
				<img
					src={props.user.avatar}
					alt={`Foto de ${props.user.first_name} ${props.user.last_name}`}
				/>
			</Avatar>

			<div>
				<Name>
					{props.user.first_name} {props.user.last_name}
				</Name>
				<Email href={`mailto: ${props.user.email}`}>{props.user.email}</Email>
			</div>
		</Card>
	);
};

export default User;
