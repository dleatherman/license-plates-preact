import Logo from '../logo'

import style from './style.css';

const Header = () => (
	<header>
		<a href="/">
			<h1 class="visually-hidden">License Plates</h1>
			<Logo aria-hidden />
		</a>
	</header>
);

export default Header;
