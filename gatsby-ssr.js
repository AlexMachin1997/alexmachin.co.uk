/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import { ThemeProvider } from 'styled-components';
import React from 'react';
import theme from './src/components/theme';

import Normalize from './src/components/Normalize';

export const wrapPageElement = ({ element }) => (
	<>
		<Normalize />
		<ThemeProvider theme={theme}>
			<div>{element}</div>
		</ThemeProvider>
	</>
);
