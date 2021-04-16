import react from "react";
import { Grid, Image } from "semantic-ui-react";
import Article from "../../Models/Article";

import healthNews from "../../NewsSource/healthNews";

interface Props {
  Article: Article;
}

export default function NewsArticle({ Article }: Props) {
  return (
    <Grid.Row>
      <Grid.Column width={3}>
        <div>{Article.date} </div>
      </Grid.Column>
      <Grid.Column width={9}>
        <div>
          {" "}
          <h1> {Article.title}</h1>
        </div>
        <div> {Article.body}</div>
      </Grid.Column>
      <Grid.Column width={4}>
        <Image src={Article.image} />
      </Grid.Column>
    </Grid.Row>
  );
}
