import React from "react";
import { Container, Divider, Grid } from "semantic-ui-react";
import HeadlinesLatest from "../../Features/Headlines/HeadlinesLatest";
import AdBlock from "../Headers/AdBlock";
import HeaderContainer from "../Headers/HeaderContainer";
import NavBar from "../Headers/NavBar";

export default function Page() {
  return (
    <>
      <Container>
        <Grid>
          <Grid.Row>
            <AdBlock />
          </Grid.Row>
          <Grid.Row>
            <HeaderContainer />
          </Grid.Row>
          <Grid.Row centered>
            <NavBar />
          </Grid.Row>
        </Grid>
        <Grid.Row centered>
          <HeadlinesLatest />
        </Grid.Row>
      </Container>
    </>
  );
}
