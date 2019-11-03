import React from 'react';
import { makeStyles } from '@material-ui/styles';

// components

export default function Post(props: any) {
	const classes = useStyles();

	return (
		<pre>
			<div>Post</div>
		</pre>
	);
}

// styles
const useStyles = makeStyles((theme) => ({}));
