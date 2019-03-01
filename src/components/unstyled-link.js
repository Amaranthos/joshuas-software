import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'react-router-dom';

export const UnstyledCss = css({
	textDecoration: 'none',
	color: 'inherit'
});

export const UnstyledLink = styled(Link)(UnstyledCss);