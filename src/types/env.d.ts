declare namespace NodeJS {
	interface ProcessEnv {
		/** Ghost API endpoint của toàn bộ ứng dụng */
		REACT_APP_API_ENDPOINT: string;
		/** Ghost API key */
		REACT_APP_API_CONTENT_KEY: string;
		/** Ghost API version */
		REACT_APP_API_VERSION: 'v2' | 'canary' | 'v3';
	}
}
