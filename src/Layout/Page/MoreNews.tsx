import React from "react";
import { Grid, Image } from "semantic-ui-react";

export default function MoreNews() {
  return (
    <>
      <Grid>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
        </Grid.Column>
        <Grid.Column width={9}>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Grid.Column>
        <Grid.Column width={4}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
      </Grid>
    </>
  );
}
