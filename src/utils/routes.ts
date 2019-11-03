type Page = 'home' | 'about' | 'contact' | 'tag' | 'post';
type Route = {
	path: string;
	to: string;
	activeClassName: string;
};

const routes: Record<Page, Route> = {
	about: {
		path: '/about',
		to: '/about',
		activeClassName: 'actived'
	},
	contact: {
		path: '/contact',
		to: '/contact',
		activeClassName: 'actived'
	},
	home: {
		path: '/',
		to: '/',
		activeClassName: 'actived'
	},
	tag: {
		path: '/:tag',
		to: '/example-tag',
		activeClassName: 'actived'
	},
	post: {
		path: '/:category/:post',
		to: '/example-category/example-post',
		activeClassName: 'actived'
	}
};

export default routes;
