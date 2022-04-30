import * as React from 'react';
import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import styles from './styles/app.css';

export const meta: MetaFunction = ({ location }) => {
	// Stores the title property, outputted via the <title> tag
	const title = 'Alex Machin';

	// Add the keywords for the project, this is joined together when outputted e.g. <meta content="hello, goodbye"></meta>
	const keywords = [
		'web development',
		'web app development',
		'web developer',
		'website creator',
		'responsive web design',
		'web developer portfolio',
		'front end web developer',
		'web dev',
		'sheffield',
		'leeds',
		'rotherham',
		'css',
		'javascript',
		'express',
		'graphql',
		'south yorkshire',
		'web application',
		'gatsby',
		'react'
	];

	// Stores the site url which is prefixed with the current page path e.g.https://www.alexmachin.co.uk/made-up-page
	const siteUrl = `https://www.alexmachin.co.uk/${location.pathname}`;

	// Stores the site description
	const description =
		'A passionate and hardworking front-end developer who uses some of the latest web technologies to produce websites and web applications.';

	// Stores the social media image, used in the graph and twitter social objects
	const socialMediaImageUrl =
		'https://pbs.twimg.com/profile_images/1019513514824753153/6x5Yq0s9_400x400.jpg';

	// Main SEO tags object
	const PrimaryTagsObject = {
		title,
		description: '',
		keywords: keywords.join(' ,')
	};

	// Open Graph / Facebook object
	const OpenGraphObject = {
		'og:type': 'website',
		'og:url': siteUrl,
		'og:title': title,
		'og:description': description,
		'og:image': socialMediaImageUrl
	};

	// Twitter object
	const TwitterObject = {
		'twitter:card': 'summary_large_image',
		'twitter:url': siteUrl,
		'twitter:title': title,
		'twitter:description': description,
		'twitter:image': socialMediaImageUrl
	};

	return {
		// Base html meta tags
		charset: 'utf-8',
		viewport: 'width=device-width,initial-scale=1',
		'lag:': 'en',
		'application-name': 'Alex Machin Portfolio',

		// Add the Primary tags object properties
		...PrimaryTagsObject,

		// Add the Open Graph meta properties, this is used by social sites such as Facebook
		...OpenGraphObject,

		// Add the the Twitter object properties
		...TwitterObject
	};
};

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: styles },
	{
		rel: 'preconnect',
		href: 'https://fonts.googleapis.com'
	},
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous'
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Signika:wght@300;400;700&display=swap'
	}
];

const App = () => (
	<html lang='en'>
		<head>
			<Meta />
			<Links />
		</head>
		<body>
			<Outlet />
			<ScrollRestoration />
			<Scripts />

			{process.env.NODE_ENV === 'development' && <LiveReload />}
		</body>
	</html>
);

export default App;
