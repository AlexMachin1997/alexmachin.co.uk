import React from 'react';
import PropTypes from 'prop-types';

import Typography from '../../Typography';
import { DefaultCheckbox, DefaultCheckboxCheck, Container, ContentContainer } from './Checkbox';
import Icon from '../../Icons';
import Label from '../Label';
import replaceSpacesWith from '../../../../utils/format/replaceSpacesWith';

const Checkboxes = ({ name, text, value, checked, onChange, danger, label, id }) => (
	<Label
		showLabel={false}
		label={label}
		name={name}
		showAsterisk
		content={
			<Container
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						onChange();
					}
				}}
				id={replaceSpacesWith(id, '-').toLowerCase()}
			>
				<ContentContainer onClick={onChange}>
					<DefaultCheckboxCheck checked={checked} danger={danger}>
						<Icon icon='Tick' size='20' />
					</DefaultCheckboxCheck>
					<DefaultCheckbox
						type='checkbox'
						name={name}
						value={value}
						checked={checked}
						danger={danger}
						onChange={onChange}
					/>
				</ContentContainer>
				<Typography type='p' colour='black' text={text} height={1} />
			</Container>
		}
	/>
);

Checkboxes.defaultProps = {
	name: 'Default',
	text: 'Default text',
	value: false,
	checked: false,
	danger: false,
	onChange: () => false,
	label: 'Default label',
	id: 'example'
};

Checkboxes.propTypes = {
	name: PropTypes.string,
	text: PropTypes.string,
	value: PropTypes.bool,
	checked: PropTypes.bool,
	onChange: PropTypes.func,
	danger: PropTypes.bool,
	label: PropTypes.string,
	id: PropTypes.string
};

export default Checkboxes;
