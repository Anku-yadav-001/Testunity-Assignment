import React, { createContext, useState } from 'react';

export const NetworkContext = createContext();

export const NetworkProvider = ({ children }) => {
  const [requests, setRequests] = useState([]);
  const [filter, setFilter] = useState('all'); 
  let [reqDetails,setReqdetails]=useState({})
  
  return (
    <NetworkContext.Provider value={{ requests, setRequests, filter, setFilter,reqDetails,setReqdetails }}>
      {children}
    </NetworkContext.Provider>
  );
};
