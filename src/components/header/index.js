import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header>
		<a href="/">
			<h1>License Plates</h1>
		</a>
	</header>
);

export default Header;
