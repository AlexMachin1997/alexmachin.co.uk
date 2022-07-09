import * as React from 'react';

import * as yup from 'yup';

import { useLoaderData, Form, useActionData, useTransition } from '@remix-run/react';
import { json } from '@remix-run/node';
import type { ActionFunction } from '@remix-run/node';

// TODO: Remove these dependencies once I find a better icon alternative
import { ReactLogo, Nodejs, Github } from 'styled-icons/boxicons-logos';
import { Storybook, Jest, Expo, Tailwindcss, Graphql } from 'styled-icons/simple-icons';
import {
	TwitterWithCircle as Twitter,
	InstagramWithCircle as Instagram,
	LinkedinWithCircle as LinkedIn
} from 'styled-icons/entypo-social';

type Technology = {
	title: string;
	description: string;
	icon: string;
	link: string;
};

type ProjectLink = {
	link: string;
	icon: string;
	title: string;
};

type Project = {
	title: string;
	description: string;
	imageUrl: string;
	links: ProjectLink[];
};

type LoaderData = {
	technologies: Technology[];
	yearsSinceIStartedWebDevelopment: number;
	currentYear: number;
	projects: Project[];
};

type ActionData = {
	errors?: { [key: string]: string } | null;
	data?: string | null;
};

export const loader = async () => {
	// Return the list of technologies I use
	const technologies: Technology[] = [
		{
			title: 'ReactJS',
			description:
				"A JavaScript library/framework which makes developing web applications easier thanks to their built-in API's and UI component approach.",
			icon: 'react',
			link: 'https://reactjs.org/'
		},
		{
			title: 'Storybook',
			description:
				"An open source development tool which make's creating and maintaining (Upgrading and Testing) UI components in isolation.",
			icon: 'storybook',
			link: 'https://storybook.js.org/'
		},
		{
			title: 'Tailwind',
			description:
				'A utility first CSS framework which can be used to achieve robust designs directly within the markup.',
			icon: 'tailwind',
			link: 'https://tailwindcss.com/'
		},
		{
			title: 'NodeJS',
			description:
				'A powerful cross-platform tool which allows JavaScript to be executed outside the browser, for example building GraphQL or Express API services.',
			icon: 'nodejs',
			link: 'https://nodejs.org/en/'
		},
		{
			title: 'Jest',
			description:
				'A JavaScript framework for creating and running unit and integration tests, I often use this with a combination of other libraries React-Testing-Library or Mock Service Worker',
			icon: 'jest',
			link: 'https://jestjs.io/'
		},
		{
			title: 'Expo',
			description:
				'An open-source platform for producing cross platform (web, iOS and Android) applications using React-Native.',
			icon: 'expo',
			link: 'https://expo.dev/'
		}
	];

	const projects: Project[] = [
		{
			title: 'TheOpenMovieDB Clone',
			description:
				"An ongoing passion project where I'm cloning TheOpenMovieDB's web application, this involves developing a UI with React and a server using GraphQL.",
			imageUrl: '/TheOpenMovieDB.jpg',
			links: [
				{
					icon: 'react',
					link: 'https://github.com/AlexMachin1997/TheOpenMovieDB-React-Example',
					title: 'React repository'
				},
				{
					icon: 'graphql',
					link: 'https://github.com/AlexMachin1997/TheOpenMovieDB-GraphQL-Example',
					title: 'GraphQL repository'
				}
			]
		},
		{
			title: 'Shopping List Assistant',
			description:
				'A mobile application built using React-Native and Expo, it was built purely to learn about cross platform mobile applications.',
			imageUrl: '/Shopping-Assistant.png',
			links: [
				{
					icon: 'expo',
					link: 'https://expo.io/@alexmachin1997/Shopping-List-Assistant',
					title: 'Expo preview'
				},
				{
					icon: 'react',
					link: 'https://github.com/AlexMachin1997/Shopping-List-Assistant-With-Expo',
					title: 'React repository'
				}
			]
		}
	];

	// Calculate the number years since I started my official web development job e.g 2021 - 2019 = 2
	const yearsSinceIStartedWebDevelopment =
		new Date().getFullYear() - new Date(2019, 7, 1).getFullYear();

	// Get the current year e.g. 2022
	const currentYear = new Date().getFullYear();

	return json<LoaderData>({
		technologies,
		yearsSinceIStartedWebDevelopment,
		currentYear,
		projects
	});
};

export const action: ActionFunction = async ({ request }) => {
	// Get the formData
	const formData = await request.formData();

	const encode = (data: Object) =>
		Object.keys(data)
			.map((key: string) => {
				// Attempt to get the form value
				const foundValue = formData.get(key);

				// foundValue must be of type string
				if (typeof foundValue === 'string') {
					return `${encodeURIComponent(key)}=${encodeURIComponent(foundValue)}`;
				}

				return '';
			})
			.filter((el) => el !== '')
			.join('&');

	// Parse the formData object
	const parsedFormData: Object = Object.fromEntries(formData);

	// Create the Form validation schema
	const validationSchema = yup.object({
		Name: yup.string().required('This is a required field'),
		EmailAddress: yup
			.string()
			.email('You must provide a valid email')
			.required('This is a required field'),
		Message: yup.string().required('This is a required field')
	});

	// Validate the formData provided via "Yup"
	try {
		// Validate the formData against the provided schema, don't abort early validate all the possible fields at once.
		await validationSchema.validate(parsedFormData, { abortEarly: false });
	} catch (err: any) {
		// This will hold the yup error message
		let ValidationErrors = {} as { [key: string]: string };

		// Loop through the yup errors provided
		err.inner.forEach((error: { path: string; message: string }) => {
			// If the error path exists update the ValidationErrors object with the path and error message.
			if (error.path) {
				ValidationErrors = {
					...ValidationErrors,
					[error.path]: error.message
				};
			}
		});

		return json<ActionData>({
			errors: ValidationErrors
		});
	}

	// Encode the formData to a string e.g. firstName=Alex&lastName=Machin etc
	const encodedFormData: string = encode({ 'form-name': 'Contact_Me', ...parsedFormData });

	// Attempt to submit the Netlify form
	try {
		// Perform the request, 'Netlify' should handle this correctly when they host the site and in development it will just succeed.
		const response = await fetch('/', {
			method: 'POST',
			body: encodedFormData,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});

		// If the network request status isn't 200 then we class it as a "failure"
		if ((response?.status ?? 500) !== 200) {
			throw Error('Something went wrong whilst trying to submit the form.');
		}

		// Return the empty response as this is a successful response.
		return json<ActionData>({
			errors: null,
			data: 'Your message was successfully sent, I will get back to you shortly.'
		});
	} catch (err: any) {
		console.log('Server error:', err?.message);
		return json<ActionData>({
			errors: {
				message: err?.message ?? "'Something went wrong try again'"
			}
		});
	}
};

const Index = () => {
	const scrollTo = (id: string) => {
		// Attempt to find the element y id
		const element = document.getElementById(id);

		// If the element can be found then smooth scroll that section into view
		if (element !== null) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
		}
	};

	// Handles the page data setup
	const { technologies, yearsSinceIStartedWebDevelopment, currentYear, projects } =
		useLoaderData() as LoaderData;

	// Handles any actions dispatched via Forms
	const actionData = useActionData() as ActionData;

	// Tracks our various action states
	const transition = useTransition();

	const state: 'idle' | 'success' | 'error' | 'submitting' = React.useMemo(() => {
		// If the submission exists then it's a submitting status
		if (transition.state === 'loading') {
			return 'submitting';
		}

		// If there is some form of data from the action then it's a success status
		if (actionData?.data) {
			return 'success';
		}

		// If there is some errors then it's an error status
		if (actionData?.errors) {
			return 'error';
		}

		// If none of the above is met then it's an idle status
		return 'idle';
	}, [transition.state, actionData]);

	// Map the icon name provided to icon
	const getIcon = (icon: string): React.ReactNode | null => {
		switch (icon) {
			case 'graphql': {
				return (
					<div className='text-pink-600'>
						<Graphql size='60' />
					</div>
				);
			}

			case 'github': {
				return (
					<div className='text-black'>
						<Github size='60' />
					</div>
				);
			}

			case 'react': {
				return (
					<div className='text-blue-500'>
						<ReactLogo size='60' />
					</div>
				);
			}

			case 'storybook': {
				return (
					<div className='text-pink-500'>
						<Storybook size='60' />
					</div>
				);
			}

			case 'nodejs': {
				return (
					<div className='text-green-500'>
						<Nodejs size='60' />
					</div>
				);
			}

			case 'tailwind': {
				return (
					<div className='text-blue-400'>
						<Tailwindcss size='60' />
					</div>
				);
			}

			case 'jest': {
				return (
					<div className='text-red-500'>
						<Jest size='60' />
					</div>
				);
			}

			case 'expo': {
				return (
					<div className='text-black'>
						<Expo size='60' />
					</div>
				);
			}

			default: {
				return null;
			}
		}
	};

	// Stores a reference to the Form, allows us to reset the values
	const formRef = React.useRef<HTMLFormElement | null>(null);

	// Stores a reference to the name field allow us to refocus to the value
	const formNameFieldRef = React.useRef<HTMLInputElement | null>(null);

	React.useEffect(() => {
		if (state === 'success') {
			formRef.current?.reset();
		}
	}, [state]);

	return (
		<>
			<nav className='fixed top-0 right-0 left-0 z-[1000000] flex flex-wrap items-center justify-around bg-black pt-4 sm:pt-0'>
				<ul>
					<li>
						<button
							type='button'
							className='font-kaushan-script text-3xl font-bold italic text-yellow'
							onClick={() => scrollTo('About')}
						>
							Alex Machin
						</button>
					</li>
				</ul>

				<ul className='flex list-none'>
					<li className='m-4'>
						<button
							type='button'
							className='cursor-pointer text-2xl font-bold uppercase text-white'
							onClick={() => scrollTo('About')}
						>
							About
						</button>
					</li>
					<li className='m-4'>
						<button
							type='button'
							className='cursor-pointer text-2xl font-bold uppercase text-white'
							onClick={() => scrollTo('Projects')}
						>
							Projects
						</button>
					</li>
					<li className='m-4'>
						<button
							type='button'
							className='cursor-pointer text-2xl font-bold uppercase text-white'
							onClick={() => scrollTo('Contact')}
						>
							Contact
						</button>
					</li>
				</ul>
			</nav>

			<section
				id='About'
				className='ml-auto mr-auto max-w-[1000px] bg-white pt-32 pb-4 pl-4 pr-4 text-center'
			>
				<h2 className='mb-5 text-4xl font-medium text-black'>About Me</h2>

				<p className='mb-5 text-lg'>
					Hello, my name is Alex Machin. I am a Front-End Web Developer from Sheffield who loves
					producing high quality websites and web applications.
				</p>

				<p className='mb-5 text-lg'>
					I've been a Front-End Web Developer for just over {yearsSinceIStartedWebDevelopment} years
					now, and I've enjoyed every moment of it. My journey started at University and since then
					I've either been working with local companies, developing cool side projects and
					connecting with developers on various social platforms.
				</p>

				<p className='mb-5 text-lg'>
					I use HTML, CSS and Javascript, though my current focus is using technologies such as:
				</p>

				<ul className='grid grid-cols-1 items-center p-0 text-center md:grid-cols-3'>
					{technologies?.map((technology) => (
						<li className='m-4 flex h-full flex-col items-center' key={technology.title}>
							<a
								href={technology.link}
								rel='noreferrer'
								className='mb-2 flex flex-col items-center justify-center text-2xl font-bold text-black underline'
							>
								{getIcon(technology.icon)}
								{technology.title}
							</a>
							<p>{technology.description}</p>
						</li>
					))}
				</ul>
			</section>

			<section id='Projects' className='bg-slate-100'>
				<div className='ml-auto mr-auto max-w-[1000px] p-4 text-center'>
					<h2 className='text-4xl font-medium text-black'>Projects</h2>

					<ul className='grid grid-cols-1 items-center gap-y-10 p-4 text-center md:grid-cols-2 md:gap-x-[5rem]'>
						{projects?.map((project) => (
							<li className='flex h-full w-full bg-white p-2' key={project.title}>
								<div className='flex w-full flex-col'>
									<img
										src={project.imageUrl}
										alt={project.title}
										className='ml-auto mr-auto h-[250px] w-[250px] rounded-3xl p-2'
									/>

									<div className='flex flex-1 flex-col justify-between'>
										<div className='p-4'>
											<h3 className='p-4 text-xl font-bold'>{project.title}</h3>
											<p className='text-lg'>{project.description}</p>
										</div>

										<div>
											<h3 className='p-4 text-center text-xl font-bold'>Project Link's</h3>
											<div className='flex justify-around'>
												{project?.links?.map(
													(projectLink: ProjectLink, projectLinkIndex: number) => (
														<a
															key={`${project.title}-${projectLink.icon}-${projectLinkIndex}`}
															href={projectLink.link}
															className='flex flex-col items-center justify-center' // Prev's layout shift when the icons load/render
														>
															{getIcon(projectLink.icon)}
															{projectLink.title}
														</a>
													)
												) ?? 'No projects available'}
											</div>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section id='Contact' className='bg-white'>
				<div className='ml-auto mr-auto max-w-[800px] p-12 text-center'>
					<h2 className='text-4xl font-medium text-black'>Contact</h2>

					{actionData?.errors?.message && (
						<h3 className='text-2xl font-bold text-red-600'>{actionData?.errors?.message ?? ''}</h3>
					)}

					<Form
						method='post'
						noValidate
						ref={formRef}
						aria-hidden={state === 'success'}
						style={{ display: state === 'success' ? 'none' : 'block' }}
						replace={false}
						name='Contact_Me'
						data-netlify='true'
					>
						<fieldset className='flex flex-col' disabled={state === 'submitting'}>
							<label htmlFor='name' className='flex flex-col pb-4'>
								<span className='flex'>
									Name
									<span className='text-2xl text-yellow'>*</span>
								</span>
								<input
									id='name'
									type='text'
									placeholder='Your Name goes here'
									name='Name'
									className='border-2 border-gray-200 p-2'
									ref={formNameFieldRef}
								/>
								{(actionData?.errors?.Name ?? '') !== '' && (
									<p className='flex text-lg font-bold text-red-600'>
										{actionData?.errors?.Name ?? ''}
									</p>
								)}
							</label>

							<label htmlFor='email' className='flex flex-col pb-4'>
								<span className='flex'>
									Email Address <span className='text-2xl text-yellow'>*</span>
								</span>
								<input
									id='email'
									type='email'
									placeholder='Your Email goes here'
									name='EmailAddress'
									className='border-2 border-gray-200 p-2'
								/>
								{(actionData?.errors?.EmailAddress ?? '') !== '' && (
									<p className='flex text-lg font-bold text-red-600'>
										{actionData?.errors?.EmailAddress ?? ''}
									</p>
								)}
							</label>

							<label htmlFor='message' className='flex flex-col pb-4'>
								<span className='flex'>
									Message <span className='text-2xl text-yellow'>*</span>
								</span>
								<textarea
									id='message'
									placeholder='Your message goes here'
									name='Message'
									className='border-2 border-gray-200 p-2'
								/>
								{(actionData?.errors?.Message ?? '') !== '' && (
									<p className='flex text-lg font-bold text-red-600'>
										{actionData?.errors?.Message ?? ''}
									</p>
								)}
							</label>

							<button
								type='submit'
								className='m-auto rounded-lg bg-yellow py-2 px-16 text-lg font-bold text-black disabled:opacity-60'
								disabled={state === 'submitting'}
							>
								{state !== 'submitting' ? 'Submit' : 'Submitting....'}
							</button>
						</fieldset>
					</Form>

					<div style={{ display: state === 'success' ? 'block' : 'none' }}>
						{actionData?.data && <h3 className='p-4 text-3xl'>{actionData?.data ?? ''}</h3>}
					</div>
				</div>
			</section>

			<footer className='items-center bg-black py-4'>
				<div className='flex flex-col flex-wrap items-center md:flex-row md:justify-around'>
					<div className='flex justify-around'>
						<a
							href='https://github.com/AlexMachin1997'
							className='mx-4'
							rel='noreferrer'
							title='Github'
						>
							<div className='text-white'>
								<Github size='40' />
							</div>
						</a>
						<a
							href='https://twitter.com/AlexMachin97'
							className='mx-4'
							rel='noreferrer'
							title='Twitter'
						>
							<div className='text-blue-400'>
								<Twitter size='40' />
							</div>
						</a>
						<a
							href='https://www.instagram.com/alexmachin1997/'
							className='mx-4'
							rel='noreferrer'
							title='Instagram'
						>
							<div className='text-pink-500'>
								<Instagram size='40' />
							</div>
						</a>
						<a
							href='https://www.linkedin.com/in/alex-machin/'
							className='mx-4'
							rel='noreferrer'
							title='LinkedIn'
						>
							<div className='text-blue-700'>
								<LinkedIn size='40' />
							</div>
						</a>
					</div>
					<div className='flex pt-2 md:pt-0'>
						<p className='mr-2 text-xl font-bold text-white'>&#169;</p>
						<p className='text-xl font-bold text-white'>Alex Machin {currentYear}</p>
					</div>
				</div>
			</footer>
		</>
	);
};
export default Index;
