import React from "react";
import NewsCard from "../../components/NewsCard/NewsCard";
import Container from "../../components/Container/Container";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader/Loader";
import { MOST_POPULAR_URL } from "../../utils/constants";

const APP_KEY = process.env.REACT_APP_KEY;

const Home = () => {
  const { loading, data, error } = useFetch(`${MOST_POPULAR_URL}${APP_KEY}`);

  return (
    <>
      <Container>
        <Loader loading={loading} />
        {error ? (
          <h2>{error}</h2>
        ) : data && data.results ? (
          data.results.map((news) => (
            <NewsCard key={news.asset_id} news={news} />
          ))
        ) : (
          <h2>No data found</h2>
        )}
      </Container>
    </>
  );
};

export default Home;
