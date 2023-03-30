import State from '../state';

import style from './style.css';

const ListStates = ({ states, foundStates }) => {
  return (
    <ul class={style.ul}>
      {states
        .map((stateName) => <li>
          <State key={stateName} stateName={stateName} checked={foundStates && foundStates.includes(stateName.toLowerCase())} foundStates={foundStates} />
        </li>)
      }
    </ul>
  )
};

export default ListStates;
