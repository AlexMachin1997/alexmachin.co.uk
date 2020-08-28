require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

const siteMetadata = {
	title: 'Alex Machin',
	description:
		'A passionate and hardworking front-end web developer who uses some of the latest web technologies to produce websites and web applications.',
	keywords: [
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
	],
	siteUrl: 'https://www.alexmachin.co.uk/',
	socialLinks: {
		github: 'https://github.com/AlexMachin1997',
		twitter: 'https://twitter.com/AlexMachin97',
		instagram: 'https://www.instagram.com/alexmachin1997/?hl=en',
		linkedIn: 'https://www.linkedin.com/in/alex-machin/'
	}
};

module.exports = {
	siteMetadata,
	plugins: [
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
				head: false,
				anonymize: true,
			}
		},
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projects`,
				path: `${__dirname}/src/images/projects`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Kaushan Script`,
					`Nunito`,
					`source sans pro\:300,400,400i,700` // you can also specify font weights and styles
				],
				display: 'block',
				fileName: false,
				pure: true
			}
		},
		{
			resolve: 'gatsby-plugin-styled-components',
			options: {}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Alex Machin`,
				short_name: `Alex Machin`,
				start_url: `/`,
				background_color: `white`,
				theme_color: `#FFDC00`,
				display: `standalone`,
				icon: `./static/favicon.png`, // This path is relative to the root of the site.
				lang: `en`,
				crossOrigin: `use-credentials`, // `use-credentials` or `anonymous`
				icons: [
					{
						src: './static/favicon.png',
						sizes: '32x32',
						type: 'image/png',
						purpose: 'any maskable'
					}
				]
			}
		},
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: siteMetadata.siteUrl,
				sitemap: `${siteMetadata.siteUrl}sitemap.xml`
			}
		}
	]
};
