import React from 'react';
import PropTypes from 'prop-types';

import Typography from '../../Typography';
import { RadioButtonElement } from './Radio';
import Label from '../Label';

const RadioButton = ({
	id,
	name,
	value,
	onChange,
	checked,
	danger,
	showAsterisk,
	showLabel,
	label,
	tabIndex,
	ariaLabel
}) => (
	<>
		<Label
			showLabel={showLabel}
			label={label}
			name={name}
			showAsterisk={showAsterisk}
			content={
				<RadioButtonElement
					onClick={onChange}
					name={name}
					id={id}
					value={value}
					type='button'
					checked={checked}
					danger={danger}
					tabIndex={tabIndex}
					aria-label={ariaLabel}
				>
					<Typography type='p' text={value} colour={checked ? 'white' : 'black'} />
				</RadioButtonElement>
			}
		/>
	</>
);

RadioButton.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	checked: PropTypes.bool,
	danger: PropTypes.bool,
	showAsterisk: PropTypes.bool,
	showLabel: PropTypes.bool,
	label: PropTypes.string,
	ariaLabel: PropTypes.string,
	tabIndex: PropTypes.string
};

RadioButton.defaultProps = {
	id: 'Default id',
	name: 'Default name',
	value: false,
	onChange: () => false,
	checked: false,
	danger: false,
	showAsterisk: true,
	showLabel: false,
	label: 'Default Label',
	ariaLabel: 'Default Aria Label',
	tabIndex: '0'
};

export default RadioButton;
