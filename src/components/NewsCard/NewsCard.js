import React from "react";

const NewsCard = ({ news }) => {
  if(!news) return null
  
  const { title, published_date, abstract, media, url } = news;

  return (
    <a href={url}>
      <div className="news-card | grid gap-30">
        <div className="news-card-date">
          <span>{published_date}</span>
        </div>
        <article className="grid gap-40">
          <div className="news-card-content">
            <h3>{title}</h3>
            <p>{abstract}</p>
          </div>
          <div className="news-card-media">
            <img
              src={media[0]?.["media-metadata"]?.[0]?.url}
              alt={media[0]?.caption}
            />
          </div>
        </article>
      </div>
    </a>
  );
};

export default NewsCard;
