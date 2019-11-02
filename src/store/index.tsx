import { combineReducers, createStore, applyMiddleware, Store } from 'redux';
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';
import { History, createBrowserHistory } from 'history';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { AboutState } from 'store/about/types';
import { aboutReducer } from 'store/about/reducer';
import { ContactState } from 'store/contact/types';
import { contactReducer } from 'store/contact/reducer';
import { LayoutState } from 'store/layout/types';
import { layoutReducer } from 'store/layout/reducer';
import { PostsState } from 'store/posts/types';
import { postsReducer } from 'store/posts/reducer';
import { TagsState } from 'store/tags/types';
import { tagsReducer } from 'store/tags/reducer';

/** Root state */
interface ApplicationState {
	about: AboutState;
	contact: ContactState;
	layout: LayoutState;
	posts: PostsState;
	tags: TagsState;
	router: RouterState;
}

/** Root reducer factory */
const createRootReducer = (history: History) => {
	return combineReducers<ApplicationState>({
		about: aboutReducer,
		contact: contactReducer,
		layout: layoutReducer,
		posts: postsReducer,
		tags: tagsReducer,
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
