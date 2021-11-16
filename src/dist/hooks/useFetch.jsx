import { useState, useEffect } from 'react';
import axios from 'axios';

export default (url) => {
  const baseUrl = 'http://localhost:3003';
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = (opt = {}) => {
    setOptions(opt);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) {
      return;
    }
    axios(baseUrl + url, options)
      .then((res) => {
        setIsLoading(false);
        setResponse(res.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        setError(error.response.data);
        setIsLoading(false);
      });
  }, [isLoading]);

  return [{ isLoading, response, error }, doFetch];
};
