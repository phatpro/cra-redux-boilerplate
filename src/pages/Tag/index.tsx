import React from 'react';
import { makeStyles } from '@material-ui/styles';

// components

// hooks
import useLoadPosts from 'pages/Tag/useLoadPosts';
import useUpdatePost from 'pages/Tag/useUpdatePost';

export default function Tag(props: any) {
	const classes = useStyles();
	const { error, loading, data } = useLoadPosts();
	const [ update, { errorUpdatedPost, loadingUpdatedPost, dataUpdatedPost } ] = useUpdatePost();

	if (error) return <React.Fragment>Có lỗi xảy ra</React.Fragment>;

	if (loading) return <React.Fragment>Đang load...</React.Fragment>;

	function onUpdatePost() {
		update();
	}

	return (
		<div>
			Tag
			<div>
				<button onClick={onUpdatePost}>Click change</button>
			</div>
			<b>
				{errorUpdatedPost && 'Có lỗi khi update post...'}
				{loadingUpdatedPost && 'Đang update post...'}
				{dataUpdatedPost && 'Update post thành công...'}
			</b>
			{data &&
				Object.entries(data).map((value, key) => {
					return <pre key={key}>{JSON.stringify(value, null, 4)}</pre>;
				})}
		</div>
	);
}

// styles
const useStyles = makeStyles((theme) => ({}));
