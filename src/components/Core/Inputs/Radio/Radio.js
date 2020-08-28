import styled from 'styled-components';

export const RadioButtonElement = styled.button`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	outline: none;
	cursor: pointer;

	background: ${(props) => props.theme.white};
	border: 1px solid
		${(props) => {
			if (props.danger === true) {
				return props.theme.red;
			}

			return props.theme.lightGrey;
		}};

	background: ${(props) => {
		if (props.checked === true) {
			return props.theme.black;
		}

		return props.theme.white;
	}};
`;
