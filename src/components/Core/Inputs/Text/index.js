import React from 'react';
import PropTypes from 'prop-types';

import { TextInput, TextInputContainer, TextInputContentContainer } from './Text';
import Label from '../Label';

const Text = ({
	danger,
	border,
	placeholder,
	type,
	disabled,
	name,
	content,
	contentBackground,
	contentTextColour,
	showAsterisk,
	showLabel,
	label,
	tabIndex,
	id,
	errorMessage,
	ariaLabel,
	register
}) => (
	<>
		<Label
			showAsterisk={showAsterisk}
			showLabel={showLabel}
			label={label}
			name={name}
			content={
				<div style={{ width: '100%' }}>
					{errorMessage !== '' && errorMessage}
					<TextInputContainer>
						<TextInput
							danger={danger}
							border={border}
							placeholder={placeholder}
							type={type}
							// onBlur={onBlur}
							// onChange={onChange}
							id={id.toLowerCase()}
							disabled={disabled}
							// value={value}
							name={name}
							tabIndex={tabIndex}
							aria-label={ariaLabel}
							ref={register}
						/>
						{content !== null && (
							<TextInputContentContainer
								contentBackground={contentBackground}
								contentTextColour={contentTextColour}
							>
								{content}
							</TextInputContentContainer>
						)}
					</TextInputContainer>
				</div>
			}
		/>
	</>
);
Text.defaultProps = {
	danger: false,
	border: 'lightGrey',
	placeholder: '',
	type: 'text',
	disabled: false,
	name: 'Label',
	content: null,
	contentBackground: 'green',
	contentTextColour: 'white',
	showAsterisk: true,
	showLabel: true,
	label: 'Default Label',
	tabIndex: '0',
	id: '',
	errorMessage: '',
	ariaLabel: 'Default Aria Label',
	register: () => false
};

Text.propTypes = {
	danger: PropTypes.bool,
	border: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	disabled: PropTypes.bool,
	name: PropTypes.string,
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
	contentBackground: PropTypes.string,
	contentTextColour: PropTypes.string,
	showAsterisk: PropTypes.bool,
	showLabel: PropTypes.bool,
	label: PropTypes.string,
	tabIndex: PropTypes.string,
	id: PropTypes.string,
	errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	ariaLabel: PropTypes.string,
	register: PropTypes.func
};

export default Text;
