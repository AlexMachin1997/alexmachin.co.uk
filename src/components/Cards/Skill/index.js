import React from 'react';
import PropTypes from 'prop-types';

import Typography from '../../Core/Typography';
import Icon from '../../Core/Icon';

import { SkillContainer } from './Skill';

const Skill = ({ title, description, icon, iconColour, link }) => (
	<SkillContainer>
		<div style={{ margin: '1rem' }}>
			<Icon icon={icon} size='60' iconColour={iconColour} />
		</div>
		<Typography
			type='a'
			text={title}
			size='1.2rem'
			height={1.5}
			weight={900}
			underline
			colour='black'
			href={link}
		/>
		<Typography type='p' text={description} size='1rem' height={1.5} colour='black' />
	</SkillContainer>
);

Skill.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	icon: PropTypes.string,
	iconColour: PropTypes.string,
	link: PropTypes.string
};

Skill.defaultProps = {
	title: 'Skill',
	description: 'Skill description',
	icon: 'Storybook',
	iconColour: 'black',
	link: 'https://www/google.com'
};

export default Skill;
