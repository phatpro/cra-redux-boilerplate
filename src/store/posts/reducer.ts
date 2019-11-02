import { Reducer } from 'redux';
import { PostsState } from 'store/posts/types';

const initialState: PostsState = {
	error: false,
	loading: false,
	data: null
};

export const postsReducer: Reducer<PostsState> = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
