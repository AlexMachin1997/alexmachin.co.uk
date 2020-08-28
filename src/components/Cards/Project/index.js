import React from 'react';
import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';

import Typography from '../../Core/Typography';

import { ProjectContainer, ProjectCaption, ProjectLinks, ProjectImage } from './Project';

const Project = ({ title, description, image, projectLinks }) => (
	<ProjectContainer>
		<ProjectImage>
			<GatsbyImage fluid={image} alt={title} title={title} />
		</ProjectImage>

		<ProjectCaption>
			<div style={{ margin: '1rem' }}>
				<Typography type='h1' size='1.5rem' colour='black' weight='bolder' text={title} />
			</div>
			<div>
				<Typography
					type='p'
					size='1.1rem'
					colour='black'
					weight='lighter'
					text={description}
					height='1.5'
				/>
			</div>
		</ProjectCaption>

		<ProjectLinks>{projectLinks}</ProjectLinks>
	</ProjectContainer>
);

Project.defaultProps = {
	title: 'Example Project',
	description: 'Example description',
	projectLinks: <div />,
	image: {}
};

Project.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.object,
	projectLinks: PropTypes.object
};

export default Project;
