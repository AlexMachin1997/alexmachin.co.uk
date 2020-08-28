import React from 'react';
import PropTypes from 'prop-types';

import {
	Heading1,
	Heading2,
	Heading3,
	Heading4,
	Heading5,
	Heading6,
	Paragraph,
	Link,
	Label
} from './Typography';

const Typography = ({
	type,
	weight,
	height,
	size,
	text,
	colour,
	newTab,
	href,
	underline,
	htmlFor,
	textTransform,
	ariaLabel
}) => {
	switch (type) {
		case 'h1': {
			return (
				<Heading1
					fontWeight={weight}
					lineHeight={height}
					fontSize={size}
					colour={colour}
					underline={underline}
					textTransform={textTransform}
					aria-label={text}
				>
					{text}
				</Heading1>
			);
		}
		case 'h2': {
			return (
				<Heading2
					fontWeight={weight}
					lineHeight={height}
					fontSize={size}
					colour={colour}
					underline={underline}
					textTransform={textTransform}
					aria-label={text}
				>
					{text}
				</Heading2>
			);
		}
		case 'h3': {
			return (
				<Heading3
					fontWeight={weight}
					lineHeight={height}
					fontSize={size}
					colour={colour}
					underline={underline}
					textTransform={textTransform}
					aria-label={text}
				>
					{text}
				</Heading3>
			);
		}
		case 'h4': {
			return (
				<Heading4
					fontWeight={weight}
					lineHeight={height}
					fontSize={size}
					colour={colour}
					underline={underline}
					textTransform={textTransform}
					aria-label={text}
				>
					{text}
				</Heading4>
			);
		}
		case 'h5': {
			return (
				<Heading5
					fontWeight={weight}
					lineHeight={height}
					fontSize={size}
					colour={colour}
					underline={underline}
					textTransform={textTransform}
					aria-label={text}
				>
					{text}
				</Heading5>
			);
		}
		case 'h6': {
			return (
				<Heading6
					fontWeight={weight}
					lineHeight={height}
					fontSize={size}
					colour={colour}
					underline={underline}
					textTransform={textTransform}
					aria-label={text}
				>
					{text}
				</Heading6>
			);
		}

		case 'p': {
			return (
				<Paragraph
					fontWeight={weight}
					lineHeight={height}
					fontSize={size}
					colour={colour}
					underline={underline}
					textTransform={textTransform}
					aria-label={text}
				>
					{text}
				</Paragraph>
			);
		}

		case 'a': {
			return (
				<Link
					fontWeight={weight}
					lineHeight={height}
					fontSize={size}
					colour={colour}
					target={newTab === true ? '_blank' : '_self'}
					href={href}
					underline={underline}
					tabIndex='0'
					textTransform={textTransform}
					aria-label={ariaLabel}
					rel='noopener'
				>
					{text}
				</Link>
			);
		}

		case 'label': {
			return (
				<Label
					fontWeight={weight}
					lineHeight={height}
					fontSize={size}
					colour={colour}
					underline={underline}
					htmlFor={htmlFor}
					textTransform={textTransform}
					aria-label={ariaLabel}
				>
					{text}
				</Label>
			);
		}

		default: {
			return (
				<Heading1
					fontWeight={weight}
					lineHeight={height}
					fontSize={size}
					colour={colour}
					underline={underline}
					textTransform={textTransform}
					aria-label={text}
				>
					{text}
				</Heading1>
			);
		}
	}
};

Typography.defaultProps = {
	type: 'h1',
	weight: '500',
	height: 1,
	text: 'Default text',
	size: '1rem',
	colour: '',
	newTab: true,
	href: 'https://www.google.com',
	underline: false,
	htmlFor: '',
	transform: 'none'
};

Typography.propTypes = {
	weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	size: PropTypes.string,
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]),
	type: PropTypes.string,
	colour: PropTypes.string,
	newTab: PropTypes.bool,
	href: PropTypes.string,
	underline: PropTypes.bool,
	htmlFor: PropTypes.string,
	transform: PropTypes.string
};

export default Typography;
