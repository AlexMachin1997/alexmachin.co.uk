import React from 'react';
import PropTypes from 'prop-types';

import Typography from '../../../Typography';
import Button from '../../../Button';
import { GenderSelectorContainer, GenderSelectorsContainer } from './GenderSelection';

import theme from '../../../../Theme';

const GenderSelection = ({
	errorMessage,
	value,
	showValidationError,
	onnMaleClick,
	onFemaleClick,
	onOtherClick
}) => (
	<GenderSelectorsContainer>
		<div style={{ display: 'flex' }}>
			<Typography
				text='Date of Birth'
				type='p'
				size='1.2rem'
				colour='black'
				weight='bolder'
				height={2}
			/>
			<Typography text='*' type='p' size='1.2rem' colour='orange' weight='bolder' height={2} />
		</div>
		{errorMessage !== '' && showValidationError === true && errorMessage}
		<div style={{ display: 'flex' }}>
			<GenderSelectorContainer
				hasSpacing
				tabIndex='0'
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						onnMaleClick();
					}
				}}
			>
				<Button
					transform='capitalize'
					content={
						<GenderSelectorContainer>
							<Typography
								text='Male'
								size='1rem'
								colour={value === 'Male' ? 'white' : theme.black}
							/>
						</GenderSelectorContainer>
					}
					background={value === 'Male' ? theme.black : 'white'}
					border={showValidationError === true ? '1px solid red' : `1px solid ${theme.lightGrey}`}
					isDisabled={false}
					borderRadius='0'
					ariaLabel='Male gender button'
					onClick={onnMaleClick}
					type='button'
					textAlign='center'
					style={{ boxShadow: '0 1px 2px 0 rgba(0,0,0,0.1), 0 2px 5px 0 rgba(0,0,0,0.1)' }}
					value='Male'
				/>
			</GenderSelectorContainer>
			<GenderSelectorContainer
				hasSpacing
				tabIndex='0'
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						onFemaleClick();
					}
				}}
			>
				<Button
					transform='capitalize'
					content={
						<GenderSelectorContainer>
							<Typography
								text='Female'
								size='1rem'
								colour={value === 'Female' ? 'white' : theme.black}
							/>
						</GenderSelectorContainer>
					}
					background={value === 'Female' ? theme.black : 'white'}
					border={showValidationError === true ? '1px solid red' : `1px solid ${theme.lightGrey}`}
					isDisabled={false}
					borderRadius='0'
					ariaLabel='Female gender button'
					onClick={onFemaleClick}
					type='button'
					textAlign='center'
					style={{ boxShadow: '0 1px 2px 0 rgba(0,0,0,0.1), 0 2px 5px 0 rgba(0,0,0,0.1)' }}
					value='Female'
				/>
			</GenderSelectorContainer>
			<GenderSelectorContainer
				tabIndex='0'
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						onOtherClick();
					}
				}}
			>
				<Button
					transform='capitalize'
					content={
						<GenderSelectorContainer>
							<Typography
								text='Other'
								size='1rem'
								colour={value === 'Other' ? 'white' : theme.black}
							/>
						</GenderSelectorContainer>
					}
					background={value === 'Other' ? theme.black : 'white'}
					border={showValidationError === true ? '1px solid red' : `1px solid ${theme.lightGrey}`}
					isDisabled={false}
					borderRadius='0'
					ariaLabel='Other gender button'
					onClick={onOtherClick}
					type='button'
					textAlign='center'
					style={{ boxShadow: '0 1px 2px 0 rgba(0,0,0,0.1), 0 2px 5px 0 rgba(0,0,0,0.1)' }}
					value='Other'
				/>
			</GenderSelectorContainer>
		</div>
	</GenderSelectorsContainer>
);

GenderSelection.propTypes = {
	errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	value: PropTypes.string,
	showValidationError: PropTypes.bool,
	onnMaleClick: PropTypes.func,
	onFemaleClick: PropTypes.func,
	onOtherClick: PropTypes.func
};

GenderSelection.defaultProps = {
	errorMessage: '',
	value: '',
	showValidationError: false,
	onnMaleClick: () => false,
	onFemaleClick: () => false,
	onOtherClick: () => false
};

export default GenderSelection;
