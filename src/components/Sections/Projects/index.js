import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Container, ProjectsContainer } from './Projects';
import Project from '../../Cards/Project';
import Typography from '../../Core/Typography';
import Icon from '../../Core/Icon';

const Projects = () => {
	const projectImages = useStaticQuery(graphql`
		{
			ShoppingListApplication: file(relativePath: { eq: "Shopping-Assistant.png" }) {
				childImageSharp {
					fluid(maxHeight: 200, maxWidth: 200, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			TheOpenMovieDB: file(relativePath: { eq: "TheOpenMovieDB.jpg" }) {
				childImageSharp {
					fluid(maxHeight: 200, maxWidth: 200, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			NodeJSAPI: file(relativePath: { eq: "NodeAPI.png" }) {
				childImageSharp {
					fluid(maxHeight: 200, maxWidth: 200, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);

	const projects = [
		{
			title: 'TheOpenMovieDB Clone',
			description:
				"An ongoing passion project where I'm cloning TheOpenMovieDB's web application, this involves developing a UI with complex components and producing an API. To develop the project I'm using GraphQL, React, Apollo and a number of other web based technologies.",
			projectLinks: (
				<>
					<Typography
						type='a'
						text={
							<div>
								<Icon icon='Github' size='40' />
								<Typography type='p' text='React App' colour='black' weight='bolder' height='2.5' />
							</div>
						}
						newTab
						href='https://github.com/AlexMachin1997/TheOpenMovieDB-React-Example'
						size='1rem'
					/>

					<Typography
						type='a'
						text={
							<div>
								<Icon icon='Github' size='40' />
								<Typography
									type='p'
									text='GraphQL Service'
									colour='black'
									weight='bolder'
									height='2.5'
								/>
							</div>
						}
						newTab
						href='https://github.com/AlexMachin1997/TheOpenMovieDB-GraphQL-Example'
						size='1rem'
					/>
				</>
			),
			image: projectImages.TheOpenMovieDB.childImageSharp.fluid
		},
		{
			title: 'Shopping List Assistant',
			description:
				"A React-Native project which was developed as part of a university module. This project incorporates the fundamentals of the React library and incorporates some of the React-Native frameworks API's for example, getting and tracking a devices location, push notifications and ",
			projectLinks: (
				<>
					<Typography
						type='a'
						text={
							<div>
								<Icon icon='Github' size='40' />
								<Typography type='p' text='Github' colour='black' weight='bolder' height='2.5' />
							</div>
						}
						newTab
						href='https://github.com/AlexMachin1997/Shopping-List-Assistant-With-Expo'
						size='1rem'
					/>

					<Typography
						type='a'
						text={
							<div>
								<Icon icon='Expo' size='40' />
								<Typography type='p' text='Expo' colour='black' weight='bolder' height='2.5' />
							</div>
						}
						newTab
						href='https://expo.io/@alexmachin1997/Shopping-List-Assistant'
						size='1rem'
					/>
				</>
			),
			image: projectImages.ShoppingListApplication.childImageSharp.fluid
		},
		{
			title: 'NodeJS API with a NoSQL database',
			description:
				'A NodeJS API which allows customers to register, edit, retrieve and delete their profiles. While developing this project I learnt about ExpressJS, NodeJS, Basic CRUD operations and how to secure endpoints via JWT and store data in MongoDB.',
			projectLinks: (
				<>
					<Typography
						type='a'
						text={
							<div>
								<Icon icon='Github' size='40' />
								<Typography type='p' text='Github' colour='black' weight='bolder' height='2.5' />
							</div>
						}
						newTab
						href='https://github.com/AlexMachin1997/RESTful-API-Interface'
						size='1rem'
					/>
				</>
			),
			image: projectImages.NodeJSAPI.childImageSharp.fluid
		}
	];

	return (
		<Container id='Projects'>
			<Typography
				type='h1'
				text='Projects'
				height={1.05}
				size='2.5rem'
				colour='black'
				weight='bolder'
			/>
			{projects.length !== 0 && (
				<ProjectsContainer>
					{projects.map((project, index) => (
						<Project
							key={index}
							title={project.title}
							description={project.description}
							image={project.image}
							projectLinks={project.projectLinks}
						/>
					))}
				</ProjectsContainer>
			)}
		</Container>
	);
};

export default Projects;
