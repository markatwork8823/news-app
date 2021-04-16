import React from "react";
import { Divider, Grid, Image } from "semantic-ui-react";
import Ad from "../../Features/Ads/Ad";
import Article from "../../Models/Article";
import NewsArticle from "./NewsArticle";

interface Props {
  articles: Article[];
}

export default function BodyHeadlines({ articles }: Props) {
  // randomise articles
  function shuffle(array: Article[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  let headlineArticles = articles
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

  let headlineArticles2 = articles
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

  let headlineArticles3 = articles
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

  let headlineArticles4 = articles
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

  return (
    <>
      <Grid divided>
        <Grid.Row columns={4}>
          <Grid.Column width="4">
            {headlineArticles.slice(-2).map((article) => (
              <Grid.Column
                width="3"
                key={article.title}
                style={{ marginTop: "1rem" }}
              >
                <span>
                  <h3>{article.title}</h3>
                </span>
                <div style={{ marginTop: "1rem" }}>
                  <span>{article.body.substring(0, 250)}</span>
                </div>
              </Grid.Column>
            ))}
          </Grid.Column>
          <Grid.Column width="5">
            {headlineArticles2.slice(-1).map((article) => (
              <Grid.Column
                width="3"
                key={article.title}
                style={{ marginTop: "1rem" }}
              >
                <Image src={article.image} />
                <div style={{ marginTop: "1rem" }}>
                  <span>
                    <h3>{article.title}</h3>
                  </span>
                </div>

                <div style={{ marginTop: "1rem" }}>
                  <span>{article.body.substring(0, 250)}</span>
                </div>
              </Grid.Column>
            ))}
          </Grid.Column>
          <Grid.Column width="3">
            <Grid.Row divided>
              {headlineArticles3.slice(-1).map((article) => (
                <Grid.Column
                  width="3"
                  key={article.title}
                  style={{ marginTop: "1rem" }}
                >
                  <NewsArticle article={article} />
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width="4">
            <Grid.Row>
              <Grid.Column>
                <Ad
                  image={
                    "https://www.theaustralian.com.au/wp-content/uploads/2021/03/TAIACQ0240_50OFF_half_page_300x600_IH_ANIMATED_01-1.gif"
                  }
                />
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row columns="5" divided>
          {headlineArticles4.slice(-4).map((article) => (
            <Grid.Column width="3" key={article.title}>
              <NewsArticle article={article} />
            </Grid.Column>
          ))}

          <Grid.Column width="4">
            <Ad
              image={
                "https://tpc.googlesyndication.com/daca_images/simgad/12055124608354420574"
              }
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
