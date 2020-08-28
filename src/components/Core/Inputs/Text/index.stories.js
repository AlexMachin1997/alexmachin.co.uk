import React from 'react';
import { action } from '@storybook/addon-actions';

import TextInput from './index';
import Icon from '../../Icons';
import Typography from '../../Typography';
import ErrorMessage from '../../ErrorMessage';
import Preview from '../../../Blocks/Storybook/Preview';

export const Default = () => <Preview content={<TextInput />} />;

export const Danger = () => <Preview content={<TextInput danger={true} />} />;

export const Border = () => <Preview content={<TextInput border='blue' />} />;

export const Type = () => <Preview content={<TextInput type='email' />} />;

export const Placeholder = () => (
	<Preview content={<TextInput placeholder='My custom placeholder' />} />
);

export const OnBlur = () => (
	<Preview content={<TextInput onBlur={action('Text Input Blurred')} />} />
);

export const OnChange = () => (
	<Preview content={<TextInput onChange={action('Text Input Value Changed')} />} />
);

export const ID = () => <Preview content={<TextInput id='CustomIDAttr' />} />;

export const Disabled = () => <Preview content={<TextInput disabled={true} />} />;

export const Value = () => <Preview content={<TextInput value='ALexMachin1997@gmail.com' />} />;

export const TextInputWithAnIcon = () => (
	<Preview
		content={
			<TextInput
				value='AlexMachin1997@gmail.com'
				contentBackground='yellow'
				content={
					<div style={{ padding: '0.65rem' }}>
						<Icon icon='Search' size='25' background='green' />
					</div>
				}
			/>
		}
	/>
);

export const TextInputWithText = () => (
	<Preview
		content={
			<TextInput
				value='ALexMachin1997@gmail.com'
				contentBackground='red'
				content={
					<div style={{ padding: '0.65rem' }}>
						<Typography text='Find' colour='inherit' size='1rem' type='p' />
					</div>
				}
			/>
		}
	/>
);

export const ShowAsterisk = () => <Preview content={<TextInput showAsterisk={false} />} />;

export const ShowLabel = () => <Preview content={<TextInput showLabel={false} />} />;

export const Label = () => <Preview content={<TextInput label='Custom label' />} />;

export const ErrorMessageProp = () => (
	<Preview
		content={
			<TextInput errorMessage={<ErrorMessage message='This is a required field' />} danger={true} />
		}
	/>
);

export const TabIndex = () => (
	<Preview
		content={
			<div>
				<TextInput tabIndex='0' />
				<TextInput tabIndex='0' />
			</div>
		}
	/>
);

export default {
	component: TextInput,
	title: 'Core -> Input -> Text'
};
