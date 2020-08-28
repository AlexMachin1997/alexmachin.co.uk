import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export const ContentContainer = styled.div`
	margin-right: 1rem;
	position: relative;
	cursor: pointer;
`;

export const DefaultCheckbox = styled.input`
	margin-left: 0;
	background-color: red;
	height: 20px;
	width: 20px;
	opacity: 0;
	z-index: 10;
	cursor: pointer;
`;

export const DefaultCheckboxCheck = styled.span`
	position: absolute;
	top: 0;
	left: 5px;
	height: 20px;
	width: 20px;
	background-color: ${(props) => {
		if (props.checked === true) {
			return props.theme.black;
		}

		return props.theme.white;
	}};

	cursor: pointer;

	border: ${(props) => {
		if (props.danger === true) {
			return `1px solid ${props.theme.red}`;
		}

		if (props.checked === true) {
			return `1px solid ${props.theme.white}`;
		}

		return `1px solid ${props.theme.lightGrey}`;
	}};

	color: ${(props) => props.theme.white};

	svg {
		display: ${(props) => (props.checked ? 'block' : 'none')};
	}
`;
