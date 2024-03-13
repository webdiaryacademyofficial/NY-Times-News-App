import { useEffect, useState } from "react";

const useFetch = (url, method = "get") => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `Oops, an error occurred. Unable to fetch data. Status: ${response.status}`
          );
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(
          error.message || "Could not fetch the data, some error occured!"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, data, error };
};

export default useFetch;
