import React from 'react';
import PropTypes from 'prop-types';

import DefaultButton from './Button';

import replaceSpacesWith from '../../../utils/format/replaceSpacesWith';

const Button = ({
	transform,
	content,
	background,
	border,
	colour,
	isDisabled,
	hoverbackground,
	borderRadius,
	ariaLabel,
	onClick,
	type,
	textAlign,
	filter,
	style,
	padding
}) => (
	<DefaultButton
		padding={padding}
		transform={transform}
		background={background}
		border={border}
		colour={colour}
		disabled={isDisabled}
		hoverbackground={hoverbackground}
		borderRadius={borderRadius}
		aria-label={replaceSpacesWith(ariaLabel, '-').toLowerCase()}
		id={replaceSpacesWith(ariaLabel, '-').toLowerCase()}
		onClick={onClick}
		type={type}
		textAlign={textAlign}
		filter={filter}
		style={style}
		tabIndex='0'
	>
		{content}
	</DefaultButton>
);

Button.defaultProps = {
	transform: 'uppercase',
	content: 'Default',
	background: 'transparent',
	hoverbackground: '',
	border: '',
	colour: '',
	isDisabled: false,
	borderRadius: '0 0 0 0',
	ariaLabel: 'label',
	onClick: () => false,
	type: 'button',
	textAlign: 'left',
	filter: 'none',
	style: {},
	padding: '0.8rem'
};

Button.propTypes = {
	transform: PropTypes.oneOf([
		'none',
		'capitalize',
		'uppercase',
		'lowercase',
		'initial',
		'inherit'
	]),
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	background: PropTypes.string,
	hoverbackground: PropTypes.string,
	border: PropTypes.string,
	colour: PropTypes.string,
	isDisabled: PropTypes.bool,
	borderRadius: PropTypes.string,
	ariaLabel: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(['button', 'reset', 'submit']),
	textAlign: PropTypes.oneOf([
		'center',
		'end',
		'inital',
		'justify',
		'left',
		'right',
		'start',
		'unset'
	]),
	filter: PropTypes.string,
	style: PropTypes.object,
	padding: PropTypes.string
};

export default Button;
