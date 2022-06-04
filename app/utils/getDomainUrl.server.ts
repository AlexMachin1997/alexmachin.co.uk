const getDomainUrl = (request: Request): string => {
	// Get the host name e.g. localhost:3000
	const host = request.headers.get('X-Forwarded-Host') ?? request.headers.get('host');

	// Get the protocol, if it's localhost we use http otherwise use https if there is a ssl certificate in production
	const protocol = host?.includes('localhost') ? 'http' : 'https';

	// Return the the domain name
	return `${protocol}://${host}`;
};

export default getDomainUrl;
