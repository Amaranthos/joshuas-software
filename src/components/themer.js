import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';

import { themes } from '../utilities/styling';

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