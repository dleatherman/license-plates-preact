import { Fragment } from 'preact';;
import { get, set, del } from 'idb-keyval';

import style from './style.css';

const handleChange = (e) => {
  if (e.target.checked) {
    set(e.target.value, true)
      .catch((err) => console.warn(err));
  } else {
    del(e.target.value)
      .catch((err) => console.warn(err));
  }
}

const State = ({ stateName }) => {
  return (
    <Fragment>
      <input type="checkbox" name={stateName.toLowerCase()} id={stateName.toLowerCase()} value={stateName.toLowerCase()} onChange={handleChange} />
      <label for={stateName.toLowerCase()}>{stateName}</label>
    </Fragment>
  )
};

export default State;
