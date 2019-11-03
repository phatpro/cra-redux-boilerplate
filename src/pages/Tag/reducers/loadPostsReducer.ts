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

		errorUpdatedPost: null | Error;
		loadingUpdatedPost: boolean;
		dataUpdatedPost: null | Post;
	};
}

// Tạo redux slice
const name = 'loadPosts';
const initialState: PostsState = {
	error: null,
	loading: false,
	data: null,

	errorUpdatedPost: null,
	loadingUpdatedPost: false,
	dataUpdatedPost: null
};
const loadPostsSlice = createSlice({
	name,
	initialState,
	reducers: {
		loadPostsRequest: (state, action) => {
			state.loading = true;
		},
		loadPostsSuccess: (state, action) => {
			state.data = action.payload;
			state.loading = false;
		},
		loadPostsFailure: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		},

		updatePostRequest: (state, action) => {
			state.loadingUpdatedPost = true;
		},
		updatePostSuccess: (state, action) => {
			const { data } = state;
			const { payload } = action;

			if (!data) return;
			if (!payload || !payload.id || !data[payload.id]) return;

			data[payload.id] = {
				...data[payload.id],
				...payload
			};

			state.dataUpdatedPost = null;
			state.loadingUpdatedPost = false;
		},
		updatePostFailure: (state, action) => {
			state.errorUpdatedPost = action.payload;
			state.loadingUpdatedPost = false;
		}
	}
});

// Destruct dữ liệu cần thiết (action creators, reducer)
const { actions, reducer } = loadPostsSlice;
const {
	loadPostsRequest,
	loadPostsSuccess,
	loadPostsFailure,
	updatePostRequest,
	updatePostSuccess,
	updatePostFailure
} = actions;

// Action creator thunk xử lý load danh sách post
const loadPosts = () => async (dispatch: Dispatch) => {
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

// Action creator thunk xử lý cập nhật post
const updatePost = () => async (dispatch: Dispatch) => {
	dispatch(updatePostRequest());

	const fakeAPI = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				id: '5dbd445bcc56381648fcbde9',
				html: '<h5>HTML something fake...</h5>'
			});
		}, 5000);
	});

	const [ error, result ] = await fakeAPI
		.then((postUpdated) => [ null, postUpdated ])
		.catch((error) => [ error, null ]);

	if (error) return dispatch(updatePostFailure(error));

	if (result) return dispatch(updatePostSuccess(result));
};

export { loadPosts, updatePost, updatePostSuccess };
export default reducer;
