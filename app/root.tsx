import type { LinksFunction, MetaFunction, LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData
} from '@remix-run/react';
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
		description,
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
	{ rel: 'stylesheet preload', href: styles, as: 'style' },
	{
		rel: 'preconnect',
		href: 'https://fonts.googleapis.com',
		as: 'style'
	},
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
		as: 'style'
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Signika:wght@300;400;700&display=swap',
		as: 'style'
	}
];

type LoaderData = {
	GOOGLE_ANALYTICS_TAG_CODE: string | undefined;
};

export const loader: LoaderFunction = () =>
	json<LoaderData>({
		GOOGLE_ANALYTICS_TAG_CODE: process.env.GOOGLE_ANALYTICS_TAG_CODE
	});

const App = () => {
	const { GOOGLE_ANALYTICS_TAG_CODE } = useLoaderData<LoaderData>();

	return (
		<html lang='en'>
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				{/*

					Google Analytics Setup:

					- The following code was found from https://github.com/remix-run/remix/blob/main/examples/google-analytics/app/root.tsx

					- When in Production mode inject the Google tracking code, will track page views automatically.

					- The main google analytics code is injected below via async scripts
				*/}
				{process.env.NODE_ENV === 'production' && (
					<>
						<script
							async
							src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_TAG_CODE}`}
						/>

						<script
							async
							id='gtag-init'
							// eslint-disable-next-line react/no-danger
							dangerouslySetInnerHTML={{
								__html: `
                	window.dataLayer = window.dataLayer || [];

									function gtag(){
										dataLayer.push(arguments);
									}

									gtag('js', new Date());

                	gtag('config', '${GOOGLE_ANALYTICS_TAG_CODE}');
              `
							}}
						/>
					</>
				)}

				{/* The main layout for the application */}
				<main>
					<Outlet />
				</main>

				<ScrollRestoration />

				<Scripts />

				<LiveReload />
			</body>
		</html>
	);
};

export default App;
