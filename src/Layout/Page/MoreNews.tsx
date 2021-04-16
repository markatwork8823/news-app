import React from "react";
import { Divider, Grid, Image } from "semantic-ui-react";
import Article from "../../Models/Article";

interface Props {
  articles: Article[];
}

export default function MoreNews({ articles }: Props) {
  // randomise articles
  function shuffle(array : Article[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffle(articles);
  
  return (
    <>
      <Grid>
        {articles.splice(-20).map((article) => (
          <>
            <Grid.Row>
              <Grid.Column width={3}>
                <div>{article.date} </div>
              </Grid.Column>
              <Grid.Column width={9}>
                <div>
                  {" "}
                  <h1> {article.title}</h1>
                </div>
                <div style={{ marginTop: "1rem" }}> {article.body.substring(0, 400)}</div>
              </Grid.Column>
              <Grid.Column width={4}>
                <Image src={article.image} />
              </Grid.Column>
            </Grid.Row>
            <Divider />
          </>
        ))}
      </Grid>
    </>
  );
}
