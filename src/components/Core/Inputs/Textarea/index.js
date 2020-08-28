import React from 'react';
import PropTypes from 'prop-types';

import { TextInput, TextInputContainer } from './Textarea';
import Label from '../Label';

const Text = ({
	danger,
	border,
	placeholder,
	type,
	disabled,
	name,
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
