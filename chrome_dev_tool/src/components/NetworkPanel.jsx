import React, { useContext } from 'react';
import { NetworkContext } from '../context/NetworkContext';
import RequestList from './RequestList';
import RequestDetail from './RequestDetail';
import RequestFilter from './RequestFilter';

const NetworkPanel = () => {
  const { requests } = useContext(NetworkContext);
  
  return (
    <div>
      <RequestFilter />
      <RequestList requests={requests} />
      <RequestDetail />
    </div>
  );
};

export default NetworkPanel;
