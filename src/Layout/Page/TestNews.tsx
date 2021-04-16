
import { Container, Grid } from "semantic-ui-react";

import businessNews from "../../NewsSource/businessNews";

export default function TestNews() {
  return (
    <Container>
      <Grid>
        {businessNews.posts.map((article) => (
          <Grid.Row Key={article.title}>
            <div>{article.author} test</div>
          </Grid.Row>
        ))}
      </Grid>
    </Container>
  );
}
