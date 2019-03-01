import React from 'react';
import styled from '@emotion/styled';

import { FaIcon } from './fa-icon';
import { ExternalLink } from './external-link';

const LinksDiv = styled('div')({
	margin: '.5rem'
});

const IconLink = styled(ExternalLink)({
	margin: '.25rem'
});

const Title = styled('h3')({
	marginTop: 0
});

const LargeFaIcon = styled(FaIcon)({
	fontSize: '2em'
});

export const Home = () => (
	<div className='home'>
		<Title>I write code</Title>
		<ul>
			<li>games</li>
			<li>web</li>
			<li>front end</li>
			<li>back end</li>
			<li>scripting</li>
			<li>tools</li>
		</ul>
		<LinksDiv>
			<IconLink href='https://github.com/amaranthos'>                           <LargeFaIcon icon='github-square'    /></IconLink>
			<IconLink href='https://bitbucket.org/amaranthos'>                        <LargeFaIcon icon='bitbucket-square' /></IconLink>
			<IconLink href='https://www.youtube.com/channel/UC4VaUP2Ob7I6avrajgBm70w'><LargeFaIcon icon='youtube-square'   /></IconLink>
			<IconLink href='https://www.linkedin.com/in/joshua-hodkinson'>            <LargeFaIcon icon='linkedin-square'  /></IconLink>
			<IconLink href='https://twitter.com/jbwhodkinson'>                        <LargeFaIcon icon='twitter-square'   /></IconLink>
			<IconLink href='mailto:joshua@joshuas.software'>                          <LargeFaIcon icon='envelope-square'  /></IconLink>
		</LinksDiv>
	</div>
);
