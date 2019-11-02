import React from 'react';

// components
import Header from 'components/Header';
import Search from 'components/Search';
import Footer from 'components/Footer';

export default function Layout(props: any) {
	return (
		<React.Fragment>
			<Header />
			<Search />
			{props.children}
			<Footer />
		</React.Fragment>
	);
}
