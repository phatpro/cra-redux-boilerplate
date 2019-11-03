import { createSlice } from 'redux-starter-kit';
import { Dispatch } from 'redux';
import API from 'utils/api';

// Khai báo kiểu sử dụng cho toàn bộ ứng dụng
declare global {
	interface Post {
		id: string;
	}

	type Posts = Record<string, Post>;

	type PostsState = {
		error: null | Error;
		loading: boolean;
		data: null | Posts;
	};
}

// Tạo redux slice
const name = 'loadPosts';
const initialState: PostsState = { error: null, loading: false, data: null };
const loadPostsSlice = createSlice({
	name,
	initialState,
	reducers: {
		loadPostsRequest: (state, action) => ({ error: null, loading: true, data: null }),
		loadPostsSuccess: (state, action) => ({
			error: null,
			loading: false,
			data: action.payload
		}),
		loadPostsFailure: (state, action) => ({ error: action.payload, loading: false, data: null })
	}
});

// Destruct dữ liệu cần thiết (action creators, reducer)
const { actions, reducer } = loadPostsSlice;
const { loadPostsRequest, loadPostsSuccess, loadPostsFailure } = actions;

// Action creator thunk xử lý load danh sách post
const loadPostList = () => async (dispatch: Dispatch) => {
	dispatch(loadPostsRequest());

	const [ error, result ] = await API.posts
		.browse({ limit: 100 })
		.then((response) => {
			if (!response || !Array.isArray(response)) return;

			const result = response.reduce((prev, curr: Post) => {
				prev[curr.id] = curr;
				return prev;
			}, {});

			return [ null, result ];
		})
		.catch((error) => [ error, null ]);

	if (error) return dispatch(loadPostsFailure(error));

	if (result) return dispatch(loadPostsSuccess(result));
};

export { loadPostList };
export default reducer;
