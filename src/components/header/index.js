import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header>
		<a href="/">
			<h1>License Plates</h1>
		</a>
		<nav>
			<Link activeClassName={style.active} href="/">
				Home
			</Link>
			<Link activeClassName={style.active} href="/profile">
				Me
			</Link>
		</nav>
	</header>
);

export default Header;
