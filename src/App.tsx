import React from 'react';

// components
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from 'containers/Layout';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

// component pages
import Home from 'pages/Home';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Post from 'pages/Post';
import Tag from 'pages/Tag';

// providers
import { Provider } from 'react-redux';

// hooks and history object
import { useReduxStore, history } from 'store';

// utils
import routes from 'utils/routes';

// test api
import api from 'utils/api';
api.posts
	.browse({ limit: 1 })
	.then((posts) => console.log('posts...', posts))
	.catch((errors) => console.log('errors...', errors));

const App: React.FC = (props) => {
	const reduxStore = useReduxStore();

	return (
		<div className="App">
			<CssBaseline />
			<Provider store={reduxStore}>
				<ConnectedRouter history={history}>
					<Layout>
						<Switch>
							<Route path={routes.home.path} component={Home} exact />
							<Route path={routes.about.path} component={About} />
							<Route path={routes.contact.path} component={Contact} />
							<Route path={routes.tag.path} component={Tag} exact />
							<Route path={routes.post.path} component={Post} />
						</Switch>
					</Layout>
				</ConnectedRouter>
			</Provider>
		</div>
	);
};

export default App;
