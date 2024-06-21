import React, { useContext } from 'react';
import { NetworkContext } from '../context/NetworkContext';

const RequestFilter = () => {
  const { filter, setFilter } = useContext(NetworkContext);

  return (
    <div>
      <label>Filter by type: </label>
      <select value={filter} onChange={e => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="xhr">XHR</option>
        <option value="fetch">Fetch</option>
        <option value="axios">axios</option>
        <option value="js">JS</option>
        <option value="css">CSS</option>
      </select>
    </div>
  );
};

export default RequestFilter;
