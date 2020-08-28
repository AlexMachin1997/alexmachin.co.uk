import React from 'react';

import Icon from './index';
import * as IconRef from './iconReferences';
import Preview from '../../Blocks/Storybook/Preview';

const icons = [
	IconRef.SearchIconRef,
	IconRef.ArrowUpRightRef,
	IconRef.TickRef,
	IconRef.CrossRef,
	IconRef.UserRef,
	IconRef.GPSRef,
	IconRef.CloseRef,
	IconRef.CalendarCheckRef,
	IconRef.CalendarRef,
	IconRef.PersonRef,
	IconRef.TicketRef,
	IconRef.RadioUncheckedRef,
	IconRef.CheckCircleRef,
	IconRef.EyeRef,
	IconRef.EyeClosedRef,
	IconRef.ArrowDropUpRef,
	IconRef.ArrowDropDownRef,
	IconRef.CreditCardRef,
	IconRef.DocumentTextRef,
	IconRef.UserCheckRef,
	IconRef.ArrowLeftRef,
	IconRef.ErrorWarningRef,
	IconRef.Clock2Ref,
	IconRef.PeopleRef,
	IconRef.InfoCircleRef,
	IconRef.PrimitiveDotRef,
	IconRef.FacebookRef,
	IconRef.TwitterRef,
	IconRef.InstagramRef,
	IconRef.LinkedInRef,
	IconRef.SnapchatRef,
	IconRef.YouTubeRef,
	IconRef.KeyboardArrowRightRef,
	IconRef.KeyboardArrowLeftRef,
	IconRef.LifeBuoyRef,
	IconRef.LightBulbRef,
	IconRef.ChevronDownRef,
	IconRef.ChevronUpRef,
	IconRef.WeightHangingRef,
	IconRef.GiftRef,
	IconRef.DialpadRef,
	IconRef.QuestionAnswerRef,
	IconRef.NewspaperRef,
	IconRef.HelpRef,
	IconRef.PaymentRef,
	IconRef.SnowflakeRef,
	IconRef.BadgeRef,
	IconRef.LockRef
];

export const Example = () => (
	<Preview
		content={
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					marginTop: '1rem',
					flexWrap: 'wrap'
				}}
			>
				{icons.map((data, index) => {
					return (
						<div
							key={index}
							style={{
								margin: '1rem',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								padding: '1.5rem',
								backgroundColor: 'white',
								borderRadius: '1rem'
							}}
						>
							{data}
							<Icon icon={data} size='50' />
						</div>
					);
				})}
			</div>
		}
	/>
);

export default {
	component: Icon,
	title: 'Core -> Icons'
};
