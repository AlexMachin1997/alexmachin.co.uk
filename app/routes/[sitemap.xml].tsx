import type { LoaderFunction } from '@remix-run/node';

import getDomainUrl from '~/utils/getDomainUrl.server';

export const loader: LoaderFunction = ({ request }) => {
	// Get the domain name for the page request
	const domainName = getDomainUrl(request);

	// handle "GET" request
	// set up our text content that will be returned in the response
	const sitemap = `
    <urlset
      xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'
      xmlns:news='http://www.google.com/schemas/sitemap-news/0.9'
      xmlns:xhtml='http://www.w3.org/1999/xhtml'
      xmlns:mobile='http://www.google.com/schemas/sitemap-mobile/1.0'
      xmlns:image='http://www.google.com/schemas/sitemap-image/1.1'
      xmlns:video='http://www.google.com/schemas/sitemap-video/1.1'
    >
      <url>
        <loc>${domainName}/</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
    </urlset>
`;

	// return the text content, a status 200 success response, and set the content type to application/xml
	return new Response(sitemap, {
		status: 200,
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
