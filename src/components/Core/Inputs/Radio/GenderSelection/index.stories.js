import React from 'react';
import { action } from '@storybook/addon-actions';

import GenderSelection from './index';
import ErrorMessage from '../../../ErrorMessage';
import Preview from '../../../../Blocks/Storybook/Preview';

export const Default = () => <Preview content={<GenderSelection />} />;

export const OnChange = () => (
	<Preview content={<GenderSelection onChange={action('A gender has been selected')} />} />
);

export const ErrorMessageProp = () => (
	<Preview
		content={
			<GenderSelection
				showValidationError
				errorMessage={<ErrorMessage message='This is a required field' />}
			/>
		}
	/>
);

export const Value = () => <Preview content={<GenderSelection value='Male' />} />;

export const ShowValidationError = () => (
	<Preview
		content={
			<GenderSelection
				showValidationError
				errorMessage={<ErrorMessage message='This is a required field' />}
			/>
		}
	/>
);

export default {
	component: GenderSelection,
	title: 'Core -> Inputs -> Radio -> GenderSelection'
};
