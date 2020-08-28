import styled from 'styled-components';

export const ProjectContainer = styled.div`
	@media (max-width: 900px) {
		margin-bottom: 3rem;
	}
	margin: 1rem;
	padding: 1rem;
`;

export const ProjectImage = styled.div``;

export const ProjectCaption = styled.div`
	background-color: ${(props) => props.theme.white};
	text-align: center;
	padding: 1rem;

	@media (min-width: 600px) {
		h1 {
			font-size: 1.2rem;
		}
	}
`;

export const ProjectLinks = styled.div`
	display: flex;
	justify-content: space-around;
	background-color: ${(props) => props.theme.white};
	padding: 2rem 1rem 2.2rem 2rem;
`;
