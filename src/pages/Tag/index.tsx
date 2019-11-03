import React from 'react';
import { makeStyles } from '@material-ui/styles';

// components

// hooks
import { loadPostList } from 'pages/Tag/reducers/loadPostsReducer';
import { useDispatch, useSelector } from 'react-redux';

export default function Tag(props: any) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { error, loading, data } = useSelector<ApplicationState, PostsState>(
		(state) => state.posts
	);

	if (error) return <React.Fragment>Có lỗi xảy ra</React.Fragment>;

	if (loading) return <React.Fragment>Đang load...</React.Fragment>;

	if (!data) {
		dispatch(loadPostList());
	}

	return (
		<div>
			Tag
			{data && <pre>{JSON.stringify(data, null, 4)}</pre>}
		</div>
	);
}

// styles
const useStyles = makeStyles((theme) => ({}));
