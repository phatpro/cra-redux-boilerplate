import { Store } from 'redux';

declare global {
	interface Window {
		__REDUX_STORE__: Store;
	}
}

export {};
