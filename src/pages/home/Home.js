import React from "react";
import NewsCard from "../../components/NewsCard/NewsCard";
import Container from "../../components/Container/Container";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const appkey = process.env.REACT_APP_KEY;

  const { loading, data } = useFetch(
    `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${appkey}`
  );

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
