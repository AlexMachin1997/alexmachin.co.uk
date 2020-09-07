import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import socialMediaImage from '../../../../../static/social_profile_picture.jpg';

const Head = ({ title, description, keywords, url }) => {
	const data = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					title
					description
					keywords
					socialLinks {
						twitter
					}
					siteUrl
				}
			}
		}
	`);

	const { pathname } = useLocation();

	const pageTitle = title || data.site.siteMetadata.title;
	const pageDescription = description || data.site.siteMetadata.description;
	let pageKeywords = keywords || data.site.siteMetadata.keywords;
	let pageUrl = data.site.siteMetadata.siteUrl;

	if (pathname !== '/') {
		pageUrl = `${data.site.siteMetadata.siteUrl}/${pathname}`;
	}

	if (Array.isArray(pageKeywords) === true) {
		pageKeywords = pageKeywords.join(', ');
	}

	return (
		<Helmet
			htmlAttributes={{
				lang: 'en'
			}}
		>
			<title>{pageTitle}</title>
			<meta name='title' content={pageTitle} />
			<meta name='description' content={pageDescription} />
			<meta name='keywords' keywords={pageKeywords} />
			<meta name='application-name' content='Alex Machin Portfolio' />

			{/*

          Allows Googles Search Engine Crawlers
           robot - All Search Engines
           googlebot - Google Search Engine
      */}
			<meta name='robot' content='index,follow' />
			<meta name='googlebot' content='index,follow' />

			{/*

      Open Graph / Facebook

      */}
			<meta property='og:title' content={pageTitle} />
			<meta property='og:type' content='website' />
			<meta property='og:description' content={pageDescription} />
			<meta property='og:image' content={socialMediaImage} />
			<meta property='og:locale' content='en_GB' />
			<meta property='og:url' content={pageUrl} />
			<link
				rel='canonical'
				href={process.env.NODE_ENV === 'production' ? pageUrl : window.location.hostname}
			/>

			{/*

        Twitter

      */}
			<meta property='twitter:card' content='summary_large_image' />
			<meta property='twitter:url' content={pageUrl} />
			<meta property='twitter:title' content={pageTitle} />
			<meta property='twitter:creator' content='@AlexMachin97' />
			<meta property='twitter:description' content={pageDescription} />
			<meta property='twitter:image' content={socialMediaImage} />
		</Helmet>
	);
};

Head.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	keywords: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
	url: PropTypes.string
};

Head.defaultProps = {
	title: null,
	description: null,
	keywords: null,
	url: null
};

export default Head;
