import style from './style.css';

const TotalBar = ({ states }) => {
  return (
    <p class={style.totalBar}>
      0 /
      {states.length}
    </p>
  )
};

export default TotalBar;
