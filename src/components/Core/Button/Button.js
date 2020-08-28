import styled from 'styled-components';

import generateColours from '../../../utils/theming/generateColours.js';

const Button = styled.button`
	text-transform: ${(props) => props.transform};
	text-align: ${(props) => props.textAlign};
	font-weight: bold;
	font-size: 1rem;
	cursor: pointer;
	padding: ${(props) => props.padding};
	border: ${(props) => (props.border !== '' ? props.border : 'none')};
	background-color: ${(props) => generateColours(props.theme, props.background)};
	color: ${(props) =>
		props.colour !== '' ? generateColours(props.theme, props.colour) : props.theme.black};
	outline: transparent;
	border-radius: ${(props) => props.borderRadius};
	&:hover,
	&:active {
		transition: 0.6s;
		outline: transparent;
		background-color: ${(props) => generateColours(props.theme, props.hoverbackground)};
		filter: ${(props) => props.filter};
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	@media (max-width: 340px) {
		font-size: 0.9rem;
	}
`;

export default Button;
