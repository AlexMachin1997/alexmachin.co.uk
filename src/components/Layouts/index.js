import React from 'react';
import PropTypes from 'prop-types';

import Head from '../Core/SEO/Head';

const Layout = ({ children, title, description, keywords, url }) => (
	<main>
		<Head title={title} description={description} keywords={keywords} url={url} />
		{children}
	</main>
);

Layout.propTypes = {
	children: PropTypes.array,
	title: PropTypes.string,
	description: PropTypes.string,
	keywords: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
	url: PropTypes.string
};

Layout.defaultProps = {
	children: [],
	title: '',
	description: '',
	keywords: '',
	url: ''
};

export default Layout;
