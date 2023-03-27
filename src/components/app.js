import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';

const App = () => {
	return (
		<Fragment id="app">
			<Header />
			<main id="main">
				<Router>
					<Home path="/" />
				</Router>
			</main>
		</Fragment>
	)
};

export default App;
