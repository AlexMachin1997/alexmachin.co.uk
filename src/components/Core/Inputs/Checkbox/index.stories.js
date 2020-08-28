import React from 'react';
import { action } from '@storybook/addon-actions';

import Checkbox from './index';
import Preview from '../../../Blocks/Storybook/Preview';

export const Default = () => <Preview content={<Checkbox />} />;

export const Name = () => <Preview content={<Checkbox name='Custom name' />} />;

export const Text = () => (
	<Preview
		content={
			<Checkbox text='Yes please, I’d love to hear more about how to stay healthy for less.' />
		}
	/>
);

export const ValueAndChecked = () => <Preview content={<Checkbox value={true} checked={true} />} />;

export const OnChange = () => (
	<Preview content={<Checkbox onChange={action('The checkbox has been clicked')} />} />
);

export const Danger = () => <Preview content={<Checkbox danger={true} />} />;

export default {
	component: Checkbox,
	title: 'Core -> Input -> Checkbox'
};
