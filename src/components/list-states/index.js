import State from '../../components/state';

const ListStates = ({ states }) => (
  <ul>
    {states
      .map((stateName) => <li>
        <State key={stateName} stateName={stateName} />
      </li>)
    }
  </ul>
);

export default ListStates;
