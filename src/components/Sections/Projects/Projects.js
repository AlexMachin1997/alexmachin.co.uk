import styled from 'styled-components';

export const Container = styled.section`
	background: #f9f9f9;
	text-align: center;
	padding: 3rem 0;

	/* Tablet Styling */
	@media (min-width: 900px) {
		padding: 3rem;
	}
`;

export const ProjectsContainer = styled.div`
	/* Mobile Styling */
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	max-width: 1200px;
	margin: 0 auto;

	/* Tablet Styling */
	@media (min-width: 600px) {
		grid-template-columns: repeat(2, 1fr);
		/* column-gap: 50px; */
	}

	/* Desktop Styling */
	@media (min-width: 1100px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
