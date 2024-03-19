import React from "react";
import NewsCard from "../../components/NewsCard/NewsCard";
import Container from "../../components/Container/Container";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader/Loader";
import { MOST_POPULAR_URL } from "../../utils/constants";

const APP_KEY = process.env.REACT_APP_KEY;

const Home = () => {
  const { loading, data, error } = useFetch(`${MOST_POPULAR_URL}${APP_KEY}`);

  if (loading) {
    return (
      <Container>
        <Loader loading={loading} />
      </Container>
    );
  }

  if (error || !data || !data?.results || data?.results.length === 0) {
    return (
      <Container>
        <h2>No data found</h2>
      </Container>
    );
  }

  return (
    <Container>
      {data.results.map((news) => (
        <NewsCard key={news.asset_id} news={news} />
      ))}
    </Container>
  );
};

export default Home;
