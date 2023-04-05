if (process.env.NODE_ENV === 'development') {
	require("preact/debug");
}
import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';

const App = () => {
	return (
		<Fragment id="app">
			<a href="#main" class="visually-hidden skip-to-content">Skip to content</a>
			<Header />
			<main id="main">
				<Router>
					<Home path="/" />
				</Router>
			</main>
			<Footer />
		</Fragment>
	)
};

export default App;
