import React from 'react';
import { connect } from 'react-redux';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import { themes } from '../utilities/styling';

const globalStyles = {
	'html, body, #root': {
		width: '100%',
		height: '100%',
		padding: 0,
		margin: 0
	},
	html: {
		fontFamily: 'Roboto, sans-serif',
		overflowY: 'scroll'
	}
};

const Themer = ({ theme, children }) => (
	<ThemeProvider theme={themes[theme]}>
		<Global styles={globalStyles} />
		{ children }
	</ThemeProvider>
);

export const ConnectedThemer = connect(
	({ theme }) => ({ theme	})
)(Themer);