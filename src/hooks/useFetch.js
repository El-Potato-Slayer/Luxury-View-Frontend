import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (dataUrl, dataType = '', options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        // const response = await axios.get(`http://localhost:3000/api/v1/${url}`, {
        const response = await axios.get(`https://secure-journey-36191.herokuapp.com/api/v1/${url}`, {
          cancelToken: source.token,
          ...options,
        });
        if (isMounted) {
          setData(response.data);
          setError(null);
        }
      } catch (error) {
        if (isMounted) {
          setError(`${dataType} information could not be fetched. Please try again later.`);
          // setError(error.message);
          setData(null);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData(dataUrl);

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [dataUrl]);

  return { data, error, isLoading };
};

export default useFetch;
