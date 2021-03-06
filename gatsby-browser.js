/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
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
