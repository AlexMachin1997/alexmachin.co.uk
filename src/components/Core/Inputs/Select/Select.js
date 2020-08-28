import styled from 'styled-components';

export const Select = styled.select`
	width: 100%;
	background-color: ${(props) => props.theme.white};
	padding: 10px 6px;
	border: 1px solid ${(props) => (props.danger === true ? props.theme.red : props.theme.lightGrey)};

	color: ${(props) => {
		if (props.danger === true) {
			return props.theme.red;
		}

		return props.theme.black;
	}};

	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 5px 0 rgba(0, 0, 0, 0.1);
`;
