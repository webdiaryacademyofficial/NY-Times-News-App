import { useEffect, useState } from "react";

const useFetch = (url, method = "get") => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(url);
      const json = await response.json();
      setLoading(false);
      setData(json);
    };

    fetchData();
  }, []);

  return { loading, data };
};

export default useFetch;
