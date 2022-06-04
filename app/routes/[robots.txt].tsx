import type { ActionFunction } from '@remix-run/node';

import getDomainUrl from '~/utils/getDomainUrl.server';

export const loader: ActionFunction = ({ request }) => {
	// Get the domain name for the page request
	const domainName = getDomainUrl(request);

	// handle "GET" request
	// set up our text content that will be returned in the response
	const robotText = `
    User-agent: Googlebot
    Disallow: /nogooglebot/

    User-agent: *
    Allow: /

    Sitemap: ${domainName}/sitemap.xml
    `;

	// return the text content, a status 200 success response, and set the content type to text/plain
	return new Response(robotText, {
		status: 200,
		headers: {
			'Content-Type': 'text/plain'
		}
	});
};
