import React from "react";
import NewsCard from "../../components/NewsCard/NewsCard";
import Container from "../../components/Container/Container";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader/Loader";
import { MOST_POPULAR_URL } from "../../utils/constants";

const Home = () => {
  const APP_KEY = process.env.REACT_APP_KEY;

  const { loading, data } = useFetch(`${MOST_POPULAR_URL}${APP_KEY}`);

  return (
    <>
      <Container>
        <Loader loading={loading} />
        {data?.results.map((news) => (
          <NewsCard key={news.asset_id} news={news} />
        ))}
      </Container>
    </>
  );
};

export default Home;
