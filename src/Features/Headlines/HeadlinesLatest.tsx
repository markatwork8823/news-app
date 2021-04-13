import React from "react";
import { Card, CardGroup, Container } from "semantic-ui-react";

export default function HeadlinesLatest() {
  return (
    <>
      <Container text>
        <div>Latest Headlines</div>
      </Container>
      <CardGroup centered>
        <Card
          header="FDA calls for US Johnson & Johnson vaccine pause"
          description="JESS MALCOLM"
        />
        <Card
          header="Australia Surpasses 1.2 million COVID vaccinations"
          description="JESS MALCOLM"
        />
        <Card header="Utter Disgrace: Holgate appeals for PM apology" />
      </CardGroup>
    </>
  );
}
