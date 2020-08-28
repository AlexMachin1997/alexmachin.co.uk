import React from 'react';

import Label from './index';
import { TextInputContainer } from '../Text/Text';
import Preview from '../../../Blocks/Storybook/Preview';

export const Default = () => <Preview content={<Label />} />;

export const ShowLabel = () => <Preview content={<Label showLabel={false} />} />;

export const LabelProp = () => <Preview content={<Label label='Label example' />} />;

export const ShowAsterisk = () => <Preview content={<Label ShowAsterisk={false} />} />;

export const Name = () => <Preview content={<Label name='Default label name' />} />;

export const Content = () => (
	<Preview
		content={
			<Label
				content={
					<TextInputContainer>
						<input
							type='text'
							name='Custom Label'
							value='Hello World'
							style={{ width: '100%', border: '1px solid black' }}
						/>
					</TextInputContainer>
				}
				name='Custom Label'
			/>
		}
	/>
);

export default {
	component: Label,
	title: 'Core -> Input -> Label'
};
