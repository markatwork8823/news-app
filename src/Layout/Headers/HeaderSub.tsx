import React from "react";
import { Container, Grid, Menu } from "semantic-ui-react";

export default function HeaderSub() {
  return (
    <>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width="6">
            <Menu>
              <Menu.Item>Today</Menu.Item>
              <Menu.Item>Today's paper</Menu.Item>
              <Menu.Item>Mind Games</Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
