import React from 'react';
import { makeStyles } from '@material-ui/styles';

// import types
import { Link, LinkProps } from 'react-router-dom';

// components
import Container from '@material-ui/core/Container';
import ImageLogo from 'static/img/knowhow-logo.png';

// utils
import routes from 'utils/routes';

// types
type Props = {
	/** Dữ liệu danh sách điều hướng của toàn bộ ứng dụng */
	appLinks: LinkProps[];
	/** Dữ liệu điều hướng đến trang chủ ứng dụng */
	homeLink: LinkProps;
};

export default function Header(props: Props) {
	const classes = useStyles();

	return (
		<div>
			<Container maxWidth="md">
				<div className={classes.header}>
					<div className={classes.logo}>
						<img src={ImageLogo} alt="Logo company" />
					</div>
					<div className={classes.navigation}>
						<Link to={routes.home.to} title="Trang chủ" className={classes.link}>
							Home
						</Link>
						<Link to="/some-tag" title="Contact" className={classes.link}>
							Tag
						</Link>
						<Link to={routes.about.to} title="About me" className={classes.link}>
							About me
						</Link>
						<Link to={routes.contact.to} title="Contact" className={classes.link}>
							Contact
						</Link>
					</div>
				</div>
			</Container>
		</div>
	);
}

// default props
Header.defaultProps = {
	appLinks: [],
	homeLink: {}
};

// styles
const useStyles = makeStyles((theme) => ({
	header: {
		display: 'flex',
		flexFlow: 'row wrap',
		padding: '20px 0'
	},
	logo: {
		flex: '1 1 auto',
		'& img': {
			verticalAlign: 'middle'
		}
	},
	navigation: {
		flex: '0 1 auto',
		display: 'flex',
		flexFlow: 'row wrap',
		alignItems: 'center'
	},
	link: {
		display: 'block',
		textDecoration: 'none',
		color: 'rgba(0, 0, 0, 0.6)',
		fontWeight: 'bold',
		marginLeft: '30px',
		fontSize: '1rem',
		transition: 'all 0.1s linear',
		'&.actived, &:hover': {
			color: '#ce5757'
		}
	}
}));
