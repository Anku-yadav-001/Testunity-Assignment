import React, { useContext, useState } from 'react';
import { NetworkContext, NetworkProvider } from '../context/NetworkContext';

const RequestDetail = () => {
   let {reqDetails}=useContext(NetworkContext)
   console.log(reqDetails)
  return (
    <div>
      <h2>Request Details</h2>
      {
        <div>
          <p><strong>URL:</strong> {reqDetails.url}</p>
          <p><strong>Type:</strong> {reqDetails.type}</p>
          <p><strong>Status:</strong> {reqDetails.status}</p>
          <p><strong>Headers:</strong> {reqDetails.headers}</p>
        </div>
     }
    </div>
  );
};

export default RequestDetail;
