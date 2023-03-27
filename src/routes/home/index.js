import { Fragment, h } from 'preact'
import { useEffect, useState } from 'preact/hooks';
import { keys } from 'idb-keyval';

import style from './style.css';

import ListStates from '../../components/home/list-states';
import TotalBar from '../../components/home/total-bar'

import states from '../../data/states';

const Home = () => {
	const [foundStates, setFoundStates] = useState([]);
	useEffect(() => {
		const getAllFoundStates = () => {
			keys().then((keys) => setFoundStates(keys));
		}
		getAllFoundStates();
		return () => { };
	}, []);
	return (
		<Fragment>
			<ListStates states={states} foundStates={foundStates} />
			<TotalBar states={states} foundStates={foundStates} />
		</Fragment>
	);
};

export default Home;
