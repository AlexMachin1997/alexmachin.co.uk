import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './index';
import Typography from '../../Typography';
import Preview from '../../Blocks/Storybook/Preview';
import Icon from '../../Core/Icons';

export const Default = () => <Preview content={<Button />} />;

export const Customtransform = () => <Preview content={<Button transform='lowercase' />} />;

export const CustomBackground = () => <Preview content={<Button background='yellow' />} />;

export const CustomBorder = () => <Preview content={<Button border='1px solid red' />} />;

export const CustomColour = () => <Preview content={<Button colour='red' />} />;

export const CustomContentText = () => <Preview content={<Button content='Next steps' />} />;

export const CustomContentJSX = () => (
	<Preview
		content={
			<Button
				content={<Typography type='p' text='Next Steps' size='1.2rem' weight='bold' height={1.5} />}
			/>
		}
	/>
);

export const CustomIsDisabled = () => <Preview content={<Button isDisabled />} />;

export const CustomHoverbackground = () => <Preview content={<Button hoverbackground='red' />} />;

export const CustomBorderRadius = () => (
	<Preview content={<Button borderRadius='0.5rem' border='1px solid red' />} />
);

export const CustomAriaLabel = () => <Preview content={<Button ariaLabel='Submit' />} />;

export const CustomId = () => <Preview content={<Button id='Custom ID' />} />;

export const CustomOnClick = () => (
	<Preview content={<Button onClick={action('Button clicked')} />} />
);

export const CustomType = () => <Preview content={<Button type='submit' />} />;

export const PurchaseFlowNextStepsButton = () => (
	<Preview
		content={
			<Button
				background='yellow'
				content={
					<div style={{ justifyContent: 'space-between', display: 'flex', width: '100%' }}>
						Next Steps
						<div>
							<Icon icon='ArrowUpRight' />
						</div>
					</div>
				}
				transform='capitalize'
			/>
		}
	/>
);

export default {
	component: Button,
	title: 'Core -> Buttons'
};
