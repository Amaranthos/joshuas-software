import React from 'react';
import styled from 'react-emotion';
import { connect } from 'react-redux';

import { Button } from './button';
import { toggleTheme } from '../actions';

const SwitchButton = styled(Button)(props => ({
	backgroundColor: props.theme.backgroundColor,
	borderColor: props.theme.primaryFontColor,
	color: props.theme.primaryFontColor,
	transition: '.4s'
}));

const ThemeToggle = ({ theme, toggleTheme }) => (
	<SwitchButton onClick={toggleTheme}>{theme.toLowerCase()}</SwitchButton>
);

export const ConnectedThemeToggle = connect(
	(state) => ({
		theme: state.theme
	}),
	{
		toggleTheme: toggleTheme
	}
)(ThemeToggle);