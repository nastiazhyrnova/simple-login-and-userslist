import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Card from '../UI/Card';
import Input from '../UI/Input';
import Button from '../UI/Button';

import { login } from '../../store/actions/index';

const Title = styled.h3`
	padding-bottom: 1.5rem;
`;

const ErrorMessage = styled.p`
	padding-top: 1rem;
	color: red;
`;

const Login = () => {
	const auth = useSelector(state => state.auth);

	const emailRef = useRef();
	const passwordRef = useRef();

	const dispatch = useDispatch();

	const loginHandler = e => {
		e.preventDefault();
		dispatch(login(emailRef.current.value, passwordRef.current.value));
	};

	return (
		<Card centered>
			<Title>Inicia sesión</Title>
			<form>
				<Input
					type='email'
					title='Correo electrónico'
					placeholder='Correo electrónico'
					required
					ref={emailRef}
				/>
				<Input
					type='password'
					title='Contraseña'
					placeholder='Contraseña'
					required
					ref={passwordRef}
				/>
				<Button title='Iniciar sessión' type='submit' onClick={loginHandler}>
					Iniciar Sesión
				</Button>
			</form>
			{auth.error && <ErrorMessage>Error! {auth.error}</ErrorMessage>}
		</Card>
	);
};

export default Login;
