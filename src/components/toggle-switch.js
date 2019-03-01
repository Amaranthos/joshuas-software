import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Switch = styled('label')({
	position: 'relative',
	display: 'inline-block',
	width: 60,
	height: 34
});

const SliderStyles = css({
	position: 'absolute',
	cursor: 'pointer',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: 'grey',
	transition: '.4s',
	'::before': {
		position: 'absolute',
		content: '""',
		height: 26,
		width: 26,
		left: 4,
		bottom: 4,
		backgroundColor: 'white',
		transition: '.4s'
	}
});

const Slider = styled('span')(props => SliderStyles);

const Input = styled('input')(props => ({
	display: 'none',
	[`:checked + .${SliderStyles}`]: {
		backgroundColor: props.theme.backgroundColor
	},
	[`:focus + .${SliderStyles}`]: {
		boxShadow: `0 0 1px ${props.theme.primaryFontColor}`
	},
	[`:checked + .${SliderStyles}::before`]: {
		transform: 'translateX(26px)'
	}
}));

const ToggleSwitch = ({ onClick }) => (
	<Switch>
		<Input type='checkbox' onClick={onClick} />
		<Slider />
	</Switch>
);