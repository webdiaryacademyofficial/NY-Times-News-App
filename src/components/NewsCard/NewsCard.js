import React from "react";
import { Placeholder } from "../Icons/Placeholder";

const NewsCard = ({ news }) => {
  if (!news) return null;

  const { title, published_date, abstract, media, url } = news;
  const mediaMetadata = media?.[0]?.["media-metadata"] || [];
  const mediaUrl = mediaMetadata?.[0] ? mediaMetadata[0].url : "";
  const mediaCaption = media?.[0]?.caption || "";

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
            {mediaUrl ? (
              <img src={mediaUrl} alt={mediaCaption} />
            ) : (
              <Placeholder />
            )}
          </div>
        </article>
      </div>
    </a>
  );
};

export default NewsCard;
