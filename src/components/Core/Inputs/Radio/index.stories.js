import React from 'react';
import { action } from '@storybook/addon-actions';

import RadioButton from './index';
import Preview from '../../../Blocks/Storybook/Preview';

export const Default = () => <Preview content={<RadioButton />} />;

export const ID = () => <Preview content={<RadioButton id='Custom ID' />} />;

export const Name = () => <Preview content={<RadioButton name='male' />} />;

export const Value = () => <Preview content={<RadioButton value='value' />} />;

export const OnChange = () => (
	<Preview content={<RadioButton onChange={action('Input value has changed')} />} />
);

export const Checked = () => <Preview content={<RadioButton checked={true} />} />;

export const Danger = () => <Preview content={<RadioButton danger={true} />} />;

export const ShowAsterisk = () => (
	<Preview content={<RadioButton showAsterisk={false} showLabel={true} />} />
);

export const ShowLabel = () => <Preview content={<RadioButton showLabel={true} />} />;

export const Label = () => (
	<Preview content={<RadioButton showLabel={true} label='Custom label' />} />
);

export default {
	component: RadioButton,
	title: 'Core -> Input -> Radio'
};
