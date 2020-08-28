import styled from 'styled-components';

import generateColours from '../../../../utils/theming/generateColours';

export const TextInput = styled.input`
	display: flex;
	width: 100%;
	padding: 0.8rem;
	border: ${(props) => {
		if (props.danger === true) {
			return `2px solid red`;
		}

		if (props.border !== '' && props.danger === false) {
			return `2px solid ${generateColours(props.theme, props.border)}`;
		}

		return 'transparent';
	}};
`;

export const TextInputContainer = styled.div`
	width: 100%;
	display: flex;
`;

export const TextInputContentContainer = styled.div`
	background-color: ${(props) => generateColours(props.theme, props.contentBackground)};
	color: ${(props) => generateColours(props.theme, props.contentblack)};
	display: flex;
	align-items: center;
	cursor: pointer;
`;
