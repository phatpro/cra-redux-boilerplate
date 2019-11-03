import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { updatePost } from 'pages/Tag/reducers/loadPostsReducer';

type UseUpdatePostResult = [
	() => void,
	{
		errorUpdatedPost: null | Error;
		loadingUpdatedPost: boolean;
		dataUpdatedPost: null | Post;
	}
];

export default function useUpdatePost(): UseUpdatePostResult {
	const dispatch = useDispatch();
	const { errorUpdatedPost, loadingUpdatedPost, dataUpdatedPost } = useSelector<
		ApplicationState,
		PostsState
	>((state) => state.posts);

	function update() {
		if (loadingUpdatedPost) return;

		dispatch(updatePost());
	}

	return [ update, { errorUpdatedPost, loadingUpdatedPost, dataUpdatedPost } ];
}
