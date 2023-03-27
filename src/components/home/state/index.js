import { Fragment } from 'preact';
import { useState } from 'preact/hooks';;
import { get, set, del } from 'idb-keyval';

import style from './style.css';

const State = ({ stateName, checked }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      set(value, true)
        .catch((err) => console.warn(err));
    } else {
      del(value)
        .catch((err) => console.warn(err));
    }
  }
  return (
    <Fragment>
      <input type="checkbox" name={stateName.toLowerCase()} id={stateName.toLowerCase()} value={stateName.toLowerCase()} onChange={handleChange} checked={checked} />
      <label for={stateName.toLowerCase()}>{stateName}</label>
    </Fragment>
  )
};

export default State;
