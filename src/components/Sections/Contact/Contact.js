import styled from 'styled-components';

export const Container = styled.section`
	/* Mobile Styling */
	background: ${(props) => props.theme.white};
	padding: 3rem;
	text-align: center;

	/* Submit Button Mobile Styling */
	button {
		width: 100%;
		margin: 1rem 0;
		padding: 1rem 5rem;
	}

	/* Desktop Styling */
	@media (min-width: 600px) {
		button {
			width: unset;
		}
	}
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	max-width: 600px;
	text-align: left;
`;
