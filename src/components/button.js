import styled from 'react-emotion';

export const Button = styled('button')(props =>({
	background: '0 0',
	border: '1px solid',
	position: 'relative',
	height: 36,
	margin: 0,
	minWidth: 64,
	padding: '0 16px',
	display: 'inline-block',
	fontWeight: 500,
	letterSpacing: 0,
	overflow: 'hidden',
	outline: 'none',
	textDecoration: 'none',
	textAlign: 'center',
	lineHeight: '36px',
	verticalAlign: 'middle',
	cursor: 'pointer'
}));