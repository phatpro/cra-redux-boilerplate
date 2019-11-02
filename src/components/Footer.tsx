import React from 'react';
import { makeStyles } from '@material-ui/styles';

// import types
import { LinkProps } from 'react-router-dom';

// components
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';

// types
type Props = {
	/** Dữ liệu danh sách điều hướng của toàn bộ ứng dụng */
	appLinks: LinkProps[];
	/** Dữ liệu điều hướng đến reposity chủ sở hữu ứng dụng */
	resposityLink: LinkProps;
};

export default function Footer(props: Props) {
	const classes = useStyles();

	return (
		<div>
			<Container maxWidth="md">
				<div className={classes.wrap}>
					<div className={classes.navigation}>
						<a href="/" className={classes.link}>
							Home
						</a>
						<a href="/" className={classes.link}>
							FAQs
						</a>
						<a href="/" className={classes.link}>
							Shortcodes
						</a>
						<a href="/" className={classes.link}>
							Contact
						</a>
					</div>
					<div className={classes.copyright}>
						<span>© Copyright</span>
						<GitHubIcon classes={{ root: classes.icon }} />
						<a href="https://github.com/phatpro">phatpro</a>
					</div>
				</div>
			</Container>
		</div>
	);
}

// default props
Footer.defaultProps = {
	appLinks: [],
	resposityLink: {}
};

// styles
const useStyles = makeStyles((theme) => ({
	wrap: {
		display: 'flex',
		flexFlow: 'row wrap',
		padding: '30px 0'
	},
	navigation: {
		flex: '1 1 auto',
		display: 'flex',
		flexFlow: 'row wrap',
		alignItems: 'center'
	},
	link: {
		display: 'block',
		textDecoration: 'none',
		color: 'rgba(0, 0, 0, 0.6)',
		fontWeight: 'bold',
		marginRight: '30px',
		fontSize: '1rem',
		transition: 'all 0.1s linear',
		'&.actived, &:hover': {
			color: '#ce5757'
		}
	},
	copyright: {
		flex: '0 1 auto',
		display: 'flex',
		flexFlow: 'row wrap',
		alignItems: 'center',
		'& > *': {
			marginLeft: '8px'
		},
		'& a': {
			color: 'rgba(0, 0, 0, 0.6)',
			fontWeight: 'bold'
		}
	},
	icon: {
		width: '0.6em',
		height: '0.6em'
	}
}));
