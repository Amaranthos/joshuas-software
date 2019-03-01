import React from 'react';
import styled from '@emotion/styled';

import { UnstyledCss } from './unstyled-link';

const UnstyledAnchor = styled('a')(UnstyledCss);

export const ExternalLink = ({ className, href, children }) => (
	<UnstyledAnchor className={className} target='_blank' rel='noopener noreferrer' href={href}>{children}</UnstyledAnchor>
);