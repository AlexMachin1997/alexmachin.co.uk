import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Typography from '../../Core/Typography';
import Icon from '../../Core/Icon';
import { Container, FooterSocialLinks, FooterContent, FooterAuthor } from './Footer';

const Footer = () => {
	const data = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					socialLinks {
						github
						twitter
						instagram
						linkedIn
					}
				}
			}
		}
	`);

	return (
		<Container id='Footer'>
			<FooterContent>
				<FooterAuthor>
					<Typography type='p' text='&#169; ' size='1.2rem' weight='bolder' colour='white' />
					<Typography
						type='p'
						text={`Alex Machin ${new Date().getFullYear()}`}
						size='1.2rem'
						weight='bolder'
						colour='white'
					/>
				</FooterAuthor>
				<FooterSocialLinks>
					<Typography
						type='a'
						href={data.site.siteMetadata.socialLinks.github}
						colour='inherit'
						text={<Icon icon='Github' size='40' iconColour='white' />}
						ariaLabel='Github'
					/>

					<Typography
						type='a'
						href={data.site.siteMetadata.socialLinks.twitter}
						colour='inherit'
						text={<Icon icon='Twitter' size='40' iconColour='#1dc0f2' />}
						ariaLabel='Twitter'
					/>

					<Typography
						type='a'
						href={data.site.siteMetadata.socialLinks.instagram}
						colour='inherit'
						text={<Icon icon='Instagram' size='40' iconColour='#FF69B4' />}
						ariaLabel='Instagram'
					/>

					<Typography
						type='a'
						href={data.site.siteMetadata.socialLinks.linkedIn}
						colour='inherit'
						text={<Icon icon='LinkedIn' size='40' iconColour='#0077B5' />}
						ariaLabel='LinkedIn'
					/>
				</FooterSocialLinks>
			</FooterContent>
		</Container>
	);
};
export default Footer;
