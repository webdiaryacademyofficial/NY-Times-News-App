import React from "react";
import { render, screen } from "@testing-library/react";
import NewsCard from "./NewsCard";

test("renders news card with title, date, abstract, and image", () => {
  const mockNews = {
    uri: "nyt://article/429e93b4-8ea0-549f-95c4-27d56b2b78e6",
    url: "https://www.nytimes.com/2024/03/10/movies/oscars-winners-list.html",
    id: 100000009347663,
    asset_id: 100000009347663,
    source: "New York Times",
    published_date: "2024-03-10",
    updated: "2024-03-12 10:59:07",
    section: "Movies",
    subsection: "",
    nytdsection: "movies",
    adx_keywords: "Movies;Academy Awards (Oscars)",
    column: null,
    byline: "By Shivani Gonzalez",
    type: "Article",
    title: "Oscars 2024 Winners: See the Full List",
    abstract: "The complete list of winners for the 96th Academy Awards.",
    des_facet: ["Movies", "Academy Awards (Oscars)"],
    org_facet: [],
    per_facet: [],
    geo_facet: [],
    media: [
      {
        type: "image",
        subtype: "photo",
        caption: "Cillian Murphy accepting his Oscar for best actor.",
        copyright: "Amir Hamja/The New York Times",
        approved_for_syndication: 1,
        "media-metadata": [
          {
            url: "https://static01.nyt.com/images/2024/03/12/multimedia/10oscars-winners-list-ktqf/10oscars-winners-list-ktqf-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
          },
          {
            url: "https://static01.nyt.com/images/2024/03/12/multimedia/10oscars-winners-list-ktqf/10oscars-winners-list-ktqf-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
          },
          {
            url: "https://static01.nyt.com/images/2024/03/12/multimedia/10oscars-winners-list-ktqf/10oscars-winners-list-ktqf-mediumThreeByTwo440.jpg",
            format: "mediumThreeByTwo440",
            height: 293,
            width: 440,
          },
        ],
      },
    ],
    eta_id: 0,
  };

  render(<NewsCard news={mockNews} />);

  // Test title
  const titleElement = screen.getByText(mockNews.title);
  expect(titleElement).toBeInTheDocument();

  // Test date
  const dateElement = screen.getByText(mockNews.published_date);
  expect(dateElement).toBeInTheDocument();

  // Test abstract
  const abstractElement = screen.getByText(mockNews.abstract);
  expect(abstractElement).toBeInTheDocument();

  // Test image
  const imageElement = screen.getByRole("img");
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute(
    "src",
    mockNews.media[0]["media-metadata"][0].url
  );
  expect(imageElement).toHaveAttribute("alt", mockNews.media[0].caption);

  // Test link
  const newsLink = screen.getByRole("link");
  expect(newsLink).toBeInTheDocument();
  expect(newsLink).toHaveAttribute("href", mockNews.url);
});
