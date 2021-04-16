import React from "react";
import { Card, CardGroup, Container } from "semantic-ui-react";
import Article from "../../Models/Article";

interface Props {
  articles: Article[];
}
export default function HeadlinesLatest({ articles }: Props) {
  articles = articles.sort(() => Math.random() - 0.5);

  console.log("inside latest headlines", articles);
  return (
    <>
      <Container>
        <span>
          <strong>Latest Headlines</strong>
        </span>
      </Container>
      <CardGroup centered>
        {articles.splice(-3).map((article) => (
          <Card key={article.title}>
            <Card.Content>
              <Card.Header>{article.title}</Card.Header>
              <Card.Description>{article.date}</Card.Description>
            </Card.Content>
          </Card>
        ))}
      </CardGroup>
    </>
  );
}
