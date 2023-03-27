import { Fragment, h } from 'preact'

import style from './style.css';

import ListStates from '../../components/home/list-states';
import TotalBar from '../../components/total-bar'

import states from '../../data/states';

const Home = () => {
	return (
		<Fragment>
			<ListStates states={states} />
			<TotalBar states={states} />
		</Fragment>
	);
};

export default Home;
