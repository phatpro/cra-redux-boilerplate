import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadPosts } from 'pages/Tag/reducers/loadPostsReducer';

export default function useLoadPosts() {
	const dispatch = useDispatch();
	const posts = useSelector<ApplicationState, PostsState>((state) => state.posts);

	if ((posts && posts.data) || posts.loading) return posts;

	dispatch(loadPosts());

	return posts;
}
