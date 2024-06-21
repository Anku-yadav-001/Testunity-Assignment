
import React, { useContext } from 'react';
import { NetworkContext } from '../context/NetworkContext';

const RequestList = ({ requests }) => {
  const { filter } = useContext(NetworkContext);
  const filteredRequests = filter === 'all' ? requests : requests.filter(req => req.type === filter);

  return (
    <div>
      <h2>Requests</h2>
      <ul>
        {filteredRequests.map((req, index) => (
          <li key={index}>
            <strong>{req.method}</strong> {req.url} - {req.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RequestList;
