/*  Define config
/*   *   *   *   *   *   *   *   *   *   */
interface Route {

	name: string;
	path: string;

	next?: {
		[key: string]: Route,
	};
};


/*  Export config
/*   *   *   *   *   *   *   *   *   *   */
export default <Route> {
	
	name: 'Hello',
	path: 'hello',

	next: {
		
		'apps': {
			name: 'Apps',
			path: 'apps',
		},

		'login': {
			name: 'Login',
			path: 'login',
		},
		
		'news': {
			name: 'News',
			path: 'news',
		},

		'user': {
			name: 'User',
			path: 'user',
		},
	},
};