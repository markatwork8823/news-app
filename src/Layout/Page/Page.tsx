import React from "react";
import { Container, Divider, Grid } from "semantic-ui-react";
import Filter from "../../Features/Ads/Filter";
import HeadlinesLatest from "../../Features/Headlines/HeadlinesLatest";
import Search from "../../Features/Search";
import Article from "../../Models/Article";
import HeaderContainer from "../Headers/HeaderContainer";
import NavBar from "../Headers/NavBar";
import Body from "./Body";

interface Props {
  articles: Article[]
}
export default function Page({articles} : Props ){
  return (
    <>
      <Container>
        <Grid>
          <Grid.Row className="headerContainer">
            <HeaderContainer />
          </Grid.Row>
          <Divider />
          <Grid.Row columns={3}>
            <Grid.Column width="2" textAlign="left">
              <Filter />
            </Grid.Column>
            <Grid.Column width="12" textAlign="center">
              <NavBar />
            </Grid.Column>
            <Grid.Column width="2" textAlign="right">
              <Search />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider />
        <Grid.Row columns={1} centered>
          <Grid.Column width="16">
            <HeadlinesLatest articles={articles} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width="12">
            <Body articles={articles}/>
          </Grid.Column>
        </Grid.Row>
      </Container>
    </>
  );
}
