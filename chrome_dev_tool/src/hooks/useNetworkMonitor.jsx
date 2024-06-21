import { useEffect, useContext } from 'react';
import axios from 'axios';
import { NetworkContext } from '../context/NetworkContext';

const useNetworkMonitor = () => {
  const { setRequests } = useContext(NetworkContext);

  useEffect(() => {
    // Intercept Fetch API
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const response = await originalFetch(...args);
      const requestInfo = {
        url: args[0],
        method: args[1]?.method || 'GET',
        status: response.status,
        type: 'fetch',
        headers: response.headers,
        time: new Date()
      };
      setRequests(prev => [...prev, requestInfo]);
      return response;
    };

    // Intercept XMLHttpRequest
    const originalXhrSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function (...args) {
      this.addEventListener('load', () => {
        const requestInfo = {
          url: this.responseURL,
          method: this._method,
          status: this.status,
          type: 'xhr',
          headers: this.getAllResponseHeaders(),
          time: new Date()
        };
        setRequests(prev => [...prev, requestInfo]);
      });
      originalXhrSend.apply(this, args);
    };

    const originalXhrOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (method, url, ...args) {
      this._method = method;
      originalXhrOpen.call(this, method, url, ...args);
    };

    // Intercept Axios requests and responses
    const axiosInstance = axios.create();

    axiosInstance.interceptors.request.use(request => {
      request.metadata = { startTime: new Date() };
      return request;
    }, error => {
      return Promise.reject(error);
    });

    axiosInstance.interceptors.response.use(response => {
      const { config } = response;
      const requestInfo = {
        url: config.url,
        method: config.method.toUpperCase(),
        status: response.status,
        type: 'axios',
        headers: response.headers,
        time: new Date(),
        duration: new Date() - config.metadata.startTime,
      };
      setRequests(prev => [...prev, requestInfo]);
      return response;
    }, error => {
      const { config, response } = error;
      const requestInfo = {
        url: config.url,
        method: config.method.toUpperCase(),
        status: response ? response.status : 'Network Error',
        type: 'axios',
        headers: response ? response.headers : null,
        time: new Date(),
        duration: new Date() - config.metadata.startTime,
      };
      setRequests(prev => [...prev, requestInfo]);
      return Promise.reject(error);
    });

    // Return an instance of axios so it can be used in other components
    return axiosInstance;
  }, [setRequests]);
};

export default useNetworkMonitor;
