import React from 'react';
import PropTypes from 'prop-types';

import { ReactLogo, Nodejs, Github } from 'styled-icons/boxicons-logos';
import { Storybook, StyledComponents, Javascript, Jest, Expo } from 'styled-icons/simple-icons';
import { Gulp } from 'styled-icons/fa-brands';
import { Link as IconLink } from 'styled-icons/feather';
import {
	TwitterWithCircle,
	InstagramWithCircle,
	LinkedinWithCircle
} from 'styled-icons/entypo-social';

import { IconWrapper } from './Icon';

import * as IconRef from './iconReferences';

const Icon = ({ icon, size, onClick, iconColour }) => {
	switch (icon) {
		case IconRef.React:
			return (
				<IconWrapper onClick={onClick} iconColour={iconColour}>
					<ReactLogo size={size} />
				</IconWrapper>
			);

		case IconRef.StoryBook:
			return (
				<IconWrapper onClick={onClick} iconColour={iconColour}>
					<Storybook size={size} />
				</IconWrapper>
			);

		case IconRef.Gulp:
			return (
				<IconWrapper onClick={onClick} iconColour={iconColour}>
					<Gulp size={size} />
				</IconWrapper>
			);

		case IconRef.StyledComponents:
			return (
				<IconWrapper onClick={onClick} iconColour={iconColour}>
					<StyledComponents size={size} />
				</IconWrapper>
			);

		case IconRef.Javascript:
			return (
				<IconWrapper onClick={onClick} iconColour={iconColour}>
					<Javascript size={size} />
				</IconWrapper>
			);

		case IconRef.Jest:
			return (
				<IconWrapper onClick={onClick} iconColour={iconColour}>
					<Jest size={size} />
				</IconWrapper>
			);

		case IconRef.NodeJS:
			return (
				<IconWrapper onClick={onClick} iconColour={iconColour}>
					<Nodejs size={size} />
				</IconWrapper>
			);

		case IconRef.Github: {
			return (
				<IconWrapper onClick={onClick} iconColour={iconColour}>
					<Github size={size} />
				</IconWrapper>
			);
		}

		case IconRef.Link: {
			return (
				<IconWrapper onClick={onClick} iconColour={iconColour}>
					<IconLink size={size} />
				</IconWrapper>
			);
		}

		case IconRef.Twitter: {
			return (
				<IconWrapper onClick={onClick} iconColour={iconColour}>
					<TwitterWithCircle size={size} />
				</IconWrapper>
			);
		}

		case IconRef.Instagram: {
			return (
				<IconWrapper onClick={onClick} iconColour={iconColour}>
					<InstagramWithCircle size={size} />
				</IconWrapper>
			);
		}

		case IconRef.LinkedIn: {
			return (
				<IconWrapper onClick={onClick} iconColour={iconColour}>
					<LinkedinWithCircle size={size} />
				</IconWrapper>
			);
		}

		case IconRef.Expo: {
			return (
				<IconWrapper onClick={onClick} iconColour={iconColour}>
					<Expo size={size} />
				</IconWrapper>
			);
		}

		default:
			return (
				<IconWrapper onClick={onClick} iconColour={iconColour}>
					<Storybook size={size} />
				</IconWrapper>
			);
	}
};

Icon.defaultProps = {
	size: '18',
	icon: 'Search',
	onClick: () => false,
	iconColour: 'black'
};

Icon.propTypes = {
	size: PropTypes.string,
	icon: PropTypes.string,
	onClick: PropTypes.func,
	iconColour: PropTypes.string
};
export default Icon;
