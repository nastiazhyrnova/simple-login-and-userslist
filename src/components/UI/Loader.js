import styled from 'styled-components';

const Background = styled.div`
	width: 100%;
	height: 100%;
	background-color: var(--main-bg-color);
	position: fixed;
	z-index: 99;
`;
const StyledLoader = styled.div`
	display: inline-block;
	width: 80px;
	height: 80px;
	position: absolute;
	top: calc(50% - 40px);
	left: calc(50% - 40px);
	z-index: 100;

	& div {
		position: absolute;
		top: 33px;
		width: 13px;
		height: 13px;
		border-radius: 50%;
		background: var(--accent-color);
		animation-timing-function: cubic-bezier(0, 1, 1, 0);
	}
	& div:nth-child(1) {
		left: 8px;
		animation: lds-ellipsis1 0.6s infinite;
	}
	& div:nth-child(2) {
		left: 8px;
		animation: lds-ellipsis2 0.6s infinite;
	}
	& div:nth-child(3) {
		left: 32px;
		animation: lds-ellipsis2 0.6s infinite;
	}
	& div:nth-child(4) {
		left: 56px;
		animation: lds-ellipsis3 0.6s infinite;
	}
	@keyframes lds-ellipsis1 {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes lds-ellipsis3 {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}
	@keyframes lds-ellipsis2 {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(24px, 0);
		}
	}
`;

const Loader = () => {
	return (
		<Background>
			<StyledLoader>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</StyledLoader>
		</Background>
	);
};

export default Loader;
