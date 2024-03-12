import React from "react";

const NewsCard = () => {
  return (
    <div>
      <div className="news-card | flex gap-30">
        <div className="news-card-date">
          <span>March 12, 2024</span>
        </div>
        <article className="flex gap-40">
          <div className="news-card-content">
            <h3>
              U.S.-Israeli Citizen Itay Chen Was Killed in Oct. 7 Attack,
              Parents Say
            </h3>
            <p>
              Ruby and Hagit Chen said that they expected the Israeli prime
              minister, Benjamin Netanyahu, and President Biden to do
              “everything in their power” to bring Itay’s remains and the other
              hostages home.
            </p>
          </div>
          <div className="news-card-media">
            <img
              src="https://static01.nyt.com/images/2024/03/12/multimedia/12mideast-crisis-orphan-transfer-promo-ltzf/12mideast-crisis-orphan-transfer-promo-ltzf-thumbWide.jpg?quality=75&auto=webp&disable=upscale"
              alt="news image"
            />
          </div>
        </article>
      </div>
    </div>
  );
};

export default NewsCard;
