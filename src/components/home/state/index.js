import { Fragment } from 'preact';;
import { set, del } from 'idb-keyval';
import { foundStates } from '../../../signals/StateSignals';

import style from './style.css';

const State = ({ stateName }) => {

  const addState = (state) => {
    foundStates.value = [...foundStates.value, state]
  }

  const handleChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      addState(e.target.value);
      set(value, true)
        .catch((err) => console.warn(err));
    } else {
      del(value)
        .catch((err) => console.warn(err));
    }
  }
  return (
    <Fragment>
      <input type="checkbox" name={stateName.toLowerCase()} id={stateName.toLowerCase()} value={stateName.toLowerCase()} onChange={handleChange} checked={foundStates.value.includes(stateName.toLowerCase())} />
      <label for={stateName.toLowerCase()}>{stateName}</label>
    </Fragment>
  )
};

export default State;
