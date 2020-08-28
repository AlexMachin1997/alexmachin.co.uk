import Loader from './index';
import React from 'react';
import Preview from '../../Blocks/Storybook/Preview';

export const Default = () => <Preview content={<Loader />} />;

export const Type = () => (
	<Preview
		content={
			<div style={{ height: '400px' }}>
				<Loader type='fixed' />
			</div>
		}
	/>
);

export default {
	component: Loader,
	title: 'Core -> Loader'
};
