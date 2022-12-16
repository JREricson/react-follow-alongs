import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //abort control
    const abortcontroller = new AbortController();
    fetch(url, { signal: abortcontroller.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error('problem loading url');
        }

        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
        setIsPending(false);
      })
      .catch((err) => {
        if ((err.name = 'AbortError')) {
          console.log('fetch was aborted');
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    // set state after fetch
    //set errors

    return () => abortcontroller.abort;
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;

