import styled from 'styled-components';

export const Container = styled.section`
	background: ${(props) => props.theme.white};
	text-align: center;
	padding: 8rem 1rem 1rem 1rem;

	max-width: 1000px;
	margin-right: auto;
	margin-left: auto;

	@media (min-width: 600px) {
		padding: 8rem 3rem 3rem 3rem;
	}
`;

export const OverviewContainer = styled.div`
	/* Desktop Styling */
	@media (min-width: 700px) {
		p {
			font-size: 1.3rem;
		}

		h1 {
			font-size: 2rem;
		}
	}
`;

export const SkillContainer = styled.div`
	/* Mobile Styling */
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	align-items: center;
	text-align: center;
	padding: 0;

	/* Tablet Styling */
	@media (min-width: 600px) {
		grid-template-columns: repeat(2, 1fr);
		column-gap: 50px;
	}

	/* Desktop Styling */
	@media (min-width: 850px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
