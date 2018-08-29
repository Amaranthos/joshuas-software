import React from 'react';
import { connect } from 'react-redux';
import { injectGlobal } from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';

import { themes } from '../utilities/styling';

injectGlobal({
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
});

const Themer = ({ theme, children }) => (
    <ThemeProvider theme={themes[theme]}>
        { children }
    </ThemeProvider>
);

export const ConnectedThemer = connect(
    (state) => ({
        theme: state.theme
    })
)(Themer);