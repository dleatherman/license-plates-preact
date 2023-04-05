import { Fragment, h } from 'preact'
import { useEffect } from 'preact/hooks';
import { keys } from 'idb-keyval';

import style from './style.css';

import { foundStates } from '../../signals/StateSignals';

import ListStates from '../../components/home/list-states';
import TotalBar from '../../components/home/total-bar'

import states from '../../data/states';

const Home = () => {
	useEffect(() => {
		const getAllFoundStates = () => {
			keys().then((keys) => foundStates.value = keys);
		}
		getAllFoundStates();
		return () => { };
	}, []);
	return (
		<Fragment>
			<ListStates states={states} />
			<TotalBar states={states} />
		</Fragment>
	);
};

export default Home;
