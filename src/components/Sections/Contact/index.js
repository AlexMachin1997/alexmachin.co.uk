import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import Typography from '../../Core/Typography';
import TextInput from '../../Core/Inputs/Text';
import Textarea from '../../Core/Inputs/Textarea';
import Button from '../../Core/Button';
import Loader from '../../Core/Loader';

import { Container, FormContainer } from './Contact';

const encode = (data) =>
	Object.keys(data)
		.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
		.join('&');

const getButtonText = (isSubmitting, errorMessage) => {
	if (isSubmitting === true && errorMessage.length === 0) {
		return 'Loading';
	}
	if (isSubmitting === false && errorMessage.length > 0) {
		return 'Try Again';
	}
	return 'Submit';
};

const Contact = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const { register, handleSubmit, errors, reset } = useForm({
		mode: 'all',
		reValidateMode: 'onBlur',
		shouldUnregister: false
	});

	return (
		<Container id='Contact'>
			<Typography
				type='h1'
				text='Contact'
				height={1.05}
				size='2.5rem'
				colour='black'
				weight='bolder'
			/>
			<div>
				<Typography
					type='p'
					text={errorMessage.length !== 0 ? errorMessage : ''}
					size='1.2rem'
					height={2}
					colour='red'
					weight='bold'
				/>
			</div>
			{isSubmitting === false ? (
				<form
					name='Contact_Me'
					method='post'
					data-netlify='true'
					data-netlify-honeypot='bot-field'
					onSubmit={handleSubmit(async (formData) => {
						setIsSubmitting(true);
						setErrorMessage('');

						try {
							const response = await axios.post(
								'/',
								encode({ 'form-name': 'Contact_Me', ...formData }),
								{
									headers: {
										'Content-Type': 'application/x-www-form-urlencoded'
									}
								}
							);

							if (response.status === 200) {
								throw Error("Look's like something went wrong, try again.");
							}

							setIsSubmitting(false);
							reset();
						} catch (err) {
							console.log(err.message);
							setErrorMessage(err.message);
							setIsSubmitting(false);
							return false;
						}
					})}
				>
					<FormContainer>
						<div>
							<div>
								<TextInput
									danger={errors.Name ? errors.Name.message.length !== 0 : false}
									border='#ced4da'
									placeholder='Your Name Goes Here'
									type='text'
									onBlur={() => false}
									name='Name'
									label='Name'
									register={register({
										required: {
											value: true,
											message: 'This is a required field'
										},
										pattern: {
											value: /^[A-Za-zÀ-ÖØ-öø-ÿ]+([A-Za-zÀ-ÖØ-öø-ÿ]+[ '-])*[A-Za-zÀ-ÖØ-öø-ÿ]+$/,
											message: 'You must provide a valid name'
										}
									})}
									errorMessage={
										<Typography
											type='p'
											text={errors.Name ? errors.Name.message : ''}
											size='1rem'
											height={2}
											colour='red'
											weight='bold'
										/>
									}
								/>
							</div>
							<div style={{ marginTop: '1rem' }}>
								<TextInput
									danger={errors.EmailAddress ? errors.EmailAddress.message.length !== 0 : false}
									border='#ced4da'
									placeholder='Your Email Goes Here'
									type='text'
									onBlur={() => false}
									name='EmailAddress'
									label='Email Address'
									register={register({
										required: {
											value: true,
											message: 'This is a required field'
										},
										pattern: {
											value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
											message: 'You must provide a valid email'
										}
									})}
									errorMessage={
										<Typography
											type='p'
											text={errors.EmailAddress ? errors.EmailAddress.message : ''}
											size='1rem'
											height={2}
											colour='red'
											weight='bold'
										/>
									}
								/>
							</div>
						</div>

						<div>
							<Textarea
								danger={errors.Message ? errors.Message.message.length !== 0 : false}
								border='#ced4da'
								placeholder='Your Message Goes Here'
								type='text'
								onBlur={() => false}
								name='Message'
								label='Message'
								register={register({
									required: {
										value: true,
										message: 'This is a required field'
									}
								})}
								errorMessage={
									<Typography
										type='p'
										text={errors.Message ? errors.Message.message : ''}
										size='1rem'
										height={2}
										colour='red'
										weight='bold'
									/>
								}
							/>
						</div>
					</FormContainer>
					<Button
						transform='uppercase'
						content={
							<Typography
								type='p'
								colour='black'
								text={getButtonText(isSubmitting, errorMessage)}
								weight='bolder'
								size='1.4rem'
							/>
						}
						isDisabled={isSubmitting}
						background='#ffe01a'
						filter='brightness(90%)'
						ariaLabel='Contact Form Submission Button'
						type='submit'
						textAlign='center'
						padding='1.5rem 5rem'
						borderRadius='1rem'
					/>
				</form>
			) : (
				<Loader />
			)}
		</Container>
	);
};
export default Contact;
