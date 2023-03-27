import State from '../../components/state';

import style from './style.css';

const ListStates = ({ states }) => (
  <ul class={style.ul}>
    {states
      .map((stateName) => <li>
        <State key={stateName} stateName={stateName} />
      </li>)
    }
  </ul>
);

export default ListStates;
