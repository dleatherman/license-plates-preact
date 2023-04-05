import { numberOfStates } from '../../../signals/StateSignals';

import style from './style.css';

const TotalBar = ({ states }) => {
  return (
    <p class={style.totalBar}>
      {numberOfStates.value} /
      {states.length}
    </p>
  )
};

export default TotalBar;
