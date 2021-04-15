import React from "react";
import { Container, Divider, Grid } from "semantic-ui-react";
import Ad from "../../Features/Ads/Ad";
import HeadlinesLatest from "../../Features/Headlines/HeadlinesLatest";
import AdBlock from "../Headers/AdBlock";
import HeaderContainer from "../Headers/HeaderContainer";
import NavBar from "../Headers/NavBar";
import Body from "./Body";

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
        <Grid.Row columns={2}>
          <Grid.Column width="12">
            <Body />
          </Grid.Column>
        </Grid.Row>
      </Container>
    </>
  );
}
