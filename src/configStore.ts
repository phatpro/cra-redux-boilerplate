import { combineReducers, createStore, applyMiddleware, Store } from 'redux';
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';
import { History, createBrowserHistory } from 'history';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import loadPostsReducer from 'pages/Tag/reducers/loadPostsReducer';

// Khai báo kiểu cho toàn bộ ứng dụng sử dụng
declare global {
	/** Root state của toàn bộ ứng dụng */
	interface ApplicationState {
		posts: PostsState;
		router: RouterState;
	}
}

/** Root reducer factory */
const createRootReducer = (history: History) => {
	return combineReducers<ApplicationState>({
		posts: loadPostsReducer,
		router: connectRouter(history)
	});
};

/** Get or create (if not exists) redux store */
function getOrCreateStore(): Store {
	if (!window.__REDUX_STORE__) {
		const rootReducer = createRootReducer(history);
		const enhancers = composeWithDevTools(
			applyMiddleware(reduxThunk, routerMiddleware(history))
		);

		const store = createStore(rootReducer, {}, enhancers);

		window.__REDUX_STORE__ = store;
	}

	return window.__REDUX_STORE__;
}

/** History object */
export const history = createBrowserHistory();

/** HOC redux store */
export function useReduxStore(): Store {
	const store = getOrCreateStore();

	return store;
}
