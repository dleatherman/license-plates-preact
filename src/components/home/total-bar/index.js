import { useState } from 'preact/hooks';
import style from './style.css';

const TotalBar = ({ states, foundStates }) => {
  return (
    <p class={style.totalBar}>
      {foundStates && foundStates.length} /
      {states.length}
    </p>
  )
};

export default TotalBar;
