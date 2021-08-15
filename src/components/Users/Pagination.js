import styled from 'styled-components';

const PaginationStyle = styled.ol`
	list-style: none;
	margin: 2rem auto;
	display: flex;
	flex-direction: row;
	width: fit-content;
	& li {
		padding: 0.25rem;
		margin: 0.25rem;
	}
`;

const PageNumber = styled.li`
	& button {
		border: none;
		outline: none;
		font-size: 1rem;
		text-align: center;

		&:enabled {
			color: var(--dark-grey-color);
		}

		&:hover:enabled {
			color: var(--accent-color);
			cursor: pointer;
		}
		&:disabled {
			border-bottom: 1px solid;
			color: var(--accent-color);
			font-weight: 600;
		}
	}
`;

const Pagination = props => {
	const pagesList = [];
	for (let i = 1; i <= props.totalPages; i++) {
		pagesList.push(i);
	}

	return (
		<nav>
			<PaginationStyle>
				{pagesList.map(page => (
					<PageNumber key={page}>
						<button
							onClick={() => props.goToPage(page)}
							disabled={page === props.currentPage}>
							{page}
						</button>
					</PageNumber>
				))}
			</PaginationStyle>
		</nav>
	);
};

export default Pagination;
