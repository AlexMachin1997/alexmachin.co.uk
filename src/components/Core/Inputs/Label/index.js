import React from 'react';
import PropTypes from 'prop-types';

import { TextInputLabelContainer } from './Label';
import Typography from '../../Typography';

const Label = ({ showLabel, label, showAsterisk, name, content }) =>
	showLabel === true ? (
		<Typography
			type='label'
			htmlFor={name}
			text={
				<>
					<Typography
						text={label}
						type='p'
						size='1.2rem'
						colour='black'
						weight='bolder'
						height={2}
					/>
					{showAsterisk === true && (
						<Typography text='*' type='p' size='1rem' colour='orange' weight='bolder' height={2} />
					)}
					{content}
				</>
			}
		/>
	) : (
		<Typography
			type='label'
			htmlFor={name}
			text={
				<>
					<TextInputLabelContainer>
						<Typography
							text={label}
							type='p'
							size='1.2rem'
							colour='black'
							weight='bolder'
							height={2}
						/>
						{showAsterisk === true && (
							<Typography
								text='*'
								type='p'
								size='1.2rem'
								colour='orange'
								weight='bolder'
								height={2}
							/>
						)}
					</TextInputLabelContainer>
					{content}
				</>
			}
		/>
	);

Label.propTypes = {
	showLabel: PropTypes.bool,
	label: PropTypes.string,
	showAsterisk: PropTypes.bool,
	name: PropTypes.string,
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

Label.defaultProps = {
	showLabel: true,
	label: 'Default label',
	showAsterisk: true,
	name: 'Default label name',
	content: null
};
export default Label;
