import React from 'react';
import { makeStyles } from '@material-ui/styles';

// components
import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import SearchRounded from '@material-ui/icons/SearchRounded';

export default function Search() {
	const classes = useStyles();

	return (
		<div className={classes.search}>
			<Container maxWidth="md">
				<div className={classes.wrap}>
					<InputBase
						classes={{
							root: classes.input
						}}
						placeholder="Tìm bài viết"
					/>
					<Button
						classes={{
							root: classes.button,
							startIcon: classes.icon
						}}
						startIcon={<SearchRounded />}
						variant="outlined">
						Tìm kiếm
					</Button>
				</div>
			</Container>
		</div>
	);
}

// styles
const useStyles = makeStyles((theme) => ({
	search: {
		padding: '30px 0',
		backgroundColor: 'rgb(235, 235, 235)'
	},
	wrap: { position: 'relative' },
	input: {
		width: '100%',
		padding: '8px 150px 8px 25px',
		borderRadius: '50px',
		backgroundColor: '#fff'
	},
	icon: { color: '#fff' },
	button: {
		position: 'absolute',
		top: '50%',
		right: '8px',
		transform: 'translateY(-50%)',
		borderRadius: '25px',
		backgroundColor: '#ce5757',
		color: '#fff',
		border: 0,
		'&:hover': {
			backgroundColor: '#ce5757',
			color: '#fff'
		}
	}
}));
