import React from 'react';

import Typography from '../../Core/Typography';
import { Container, SkillContainer, OverviewContainer } from './About';
import Skill from '../../Cards/Skill';

const About = () => {
	const skills = [
		{
			title: 'ReactJS',
			description:
				"A JavaScript library/framework which makes developing web applications easier thanks to their built-in API's and UI component approach.",
			icon: 'React',
			iconColour: '#61DBFB',
			link: 'https://reactjs.org/'
		},
		{
			title: 'StorybookJS',
			description:
				"An open source development tool which make's creating and maintaining (Upgrading and Testing) UI components in isolation.",
			icon: 'Storybook',
			iconColour: '#ff4785',
			link: 'https://storybook.js.org/'
		},
		{
			title: 'Gulp',
			description:
				'A small open-source task runner for automating repetitive tasks and optimizing application assets (Only used when working on static sites or WordPress)',
			icon: 'Gulp',
			iconColour: '#c63334',
			link: 'https://gulpjs.com/'
		},
		{
			title: 'Styled-Components',
			description:
				'A CSS-In-JS styling framework that leverages modern JavaScript to write styling at the component level, for example building Cards, Buttons and Typography components.',
			icon: 'Styled-Components',
			iconColour: '#ffb733',
			link: 'https://styled-components.com/'
		},
		{
			title: 'NodeJS',
			description:
				'A powerful cross-platform tool which allows JavaScript to be executed outside the browser, for example building GraphQL or Express API services.',
			icon: 'NodeJS',
			iconColour: '#68A063',
			link: 'https://nodejs.org/en/'
		},
		{
			title: 'Jest',
			description:
				'A JavaScript framework for creating and running unit and integration tests, I often use this with a combination of other libraries to test components and utility functions.',
			icon: 'Jest',
			iconColour: '#c21325',
			link: 'https://jestjs.io/'
		}
	];

	return (
		<Container id='About'>
			<Typography
				type='h1'
				text='About Me'
				height={1.05}
				size='2.5rem'
				colour='black'
				weight='bolder'
			/>

			<OverviewContainer>
				<div style={{ margin: '1.2rem 0' }}>
					<Typography
						type='p'
						text='Hello, my name is Alex Machin. I am a Front-End Web Developer from Sheffield who loves producing high quality websites and web applications.'
						height={1.5}
						size='1.1rem'
					/>
				</div>
				<div style={{ margin: '0 0 1.2rem 0' }}>
					<Typography
						type='p'
						text="I've been a Front-End Web Developer for just over a year now, and I've enjoyed every moment of it. My journey started at University and since then I've either been working with local companies, developing cool side projects and connecting with developers on various social platforms."
						height={1.5}
						size='1.1rem'
					/>
				</div>
				<div style={{ margin: '0 0 1.2rem 0' }}>
					<Typography
						type='p'
						text='I use HTML, CSS and Javascript, though my current focus is using technologies such as: '
						height={1.5}
						size='1.1rem'
					/>
				</div>
			</OverviewContainer>

			<SkillContainer>
				{skills.length !== 0 &&
					skills.map((skill, index) => (
						<Skill
							key={index}
							title={skill.title}
							description={skill.description}
							icon={skill.icon}
							iconColour={skill.iconColour}
							link={skill.link}
						/>
					))}
			</SkillContainer>
		</Container>
	);
};

export default About;
