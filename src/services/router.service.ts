import routerConfig from '../configs/router.config';


/*  Define service
/*   *   *   *   *   *   *   *   *   *   */
class RouterService{

	private readonly parser = new Map<string, string>();

	/*	constructor
	/*	*	*	*	*	*	*	*	*/
	constructor() {
		this.parser.set( '/' + this.pathApps, this.nameApps );
		this.parser.set( '/' + this.pathNews, this.nameNews );
		this.parser.set( '/' + this.pathUser, this.nameUser );
		this.parser.set( '/' + this.pathLogin, this.nameLogin );
	}

	// 	names parser
	parse( path: string ) {
		return this.parser.get( path ) || '';
	}


	/*	apps based routes
	/*	*	*	*	*	*	*	*	*/
	get pathApps(): string { return `${ routerConfig.next?.apps.path }`; }
	get nameApps(): string { return `${ routerConfig.next?.apps.name }`; }


	/*	news based routes
	/*	*	*	*	*	*	*	*	*/
	get pathNews(): string { return `${ routerConfig.next?.news.path }`; }
	get nameNews(): string { return `${ routerConfig.next?.news.name }`; }


	/*	user based routes
	/*	*	*	*	*	*	*	*	*/
	get pathUser(): string { return `${ routerConfig.next?.user.path }`; }
	get nameUser(): string { return `${ routerConfig.next?.user.name }`; }


	/*	login based routes
	/*	*	*	*	*	*	*	*	*/
	get pathLogin(): string { return `${ routerConfig.next?.login.path }`; }
	get nameLogin(): string { return `${ routerConfig.next?.login.name }`; }

};


/*  Export service
/*   *   *   *   *   *   *   *   *   *   */
export default new RouterService();