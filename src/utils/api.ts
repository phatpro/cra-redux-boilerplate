import GhostContentAPI from '@tryghost/content-api';

const api = GhostContentAPI({
	url: process.env.REACT_APP_API_ENDPOINT,
	key: process.env.REACT_APP_API_CONTENT_KEY,
	version: process.env.REACT_APP_API_VERSION
});

export default api;
