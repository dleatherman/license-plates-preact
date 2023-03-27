import { Fragment } from 'preact';;
import { get, set, del } from 'idb-keyval';

import style from './style.css';

const handleChange = (e) => {
  if (e.target.checked) {
    set(e.target.value, true)
      .then(() => console.log('It worked!'))
      .catch((err) => console.log('It failed!', err));
  } else {
    del(e.target.value)
      .then(() => console.log('It worked!'))
      .catch((err) => console.log('It failed!', err));
  }
}

const State = ({ stateName }) => {
  return (
    <Fragment>
      <input type="checkbox" name={stateName} id={stateName} value={stateName} onChange={handleChange} />
      <label for={stateName}>{stateName}</label>
    </Fragment>
  )
};

export default State;
