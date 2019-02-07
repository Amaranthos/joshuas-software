import styled, { css } from 'react-emotion';
import { Link } from 'react-router-dom';

export const UnstyledCss = css({
	textDecoration: 'none',
	color: 'inherit'
});

export const UnstyledLink = styled(Link)(UnstyledCss);