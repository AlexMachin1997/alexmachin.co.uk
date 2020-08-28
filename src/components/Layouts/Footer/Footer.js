import styled from 'styled-components';

export const Container = styled.footer`
	background-color: ${(props) => props.theme.black};
	padding: 1rem 0;

	/* Desktop specific styling */
	@media (min-width: 600px) {
		padding: 0;
	}
`;

export const FooterContent = styled.div`
	/* Mobile Layout */
	display: flex;
	flex-direction: column-reverse;
	flex-wrap: wrap;
	align-items: center;

	/* Desktop Layout */
	@media (min-width: 600px) {
		justify-content: space-around;
		margin-right: auto;
		margin-left: auto;
		flex-direction: row;
	}
`;

export const FooterSocialLinks = styled.div`
	display: flex;
	justify-content: space-around;

	/* Add's spacing between all the social icon's */
	div {
		margin: 0 1rem;
	}
`;

export const FooterAuthor = styled.div`
	margin: 1rem 0 0;

	/* Desktop specific styling */
	@media (min-width: 600px) {
		margin: 2rem;
	}
`;
