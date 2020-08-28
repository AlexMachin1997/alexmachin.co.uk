import styled from 'styled-components';

import generateColours from '../../../utils/theming/generateColours.js';

export const IconWrapper = styled.div`
	cursor: pointer;
	color: ${(props) => generateColours(props.theme, props.iconColour)};
`;
