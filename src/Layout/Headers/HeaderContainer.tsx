import React from "react";

import { Container, Grid, Header } from "semantic-ui-react";
import UserControls from "../../Features/UserControls";
import HeaderImage from "./HeaderImage";
import HeaderSub from "./HeaderSub";

export default function HeaderContainer() {
  return (
    <>
      <Grid.Column width="3">
        <div className="headerColumn">Blank space</div>
      </Grid.Column>
      <Grid.Column width='10'>
        <HeaderImage />
        <HeaderSub />
      </Grid.Column>
      <Grid.Column width='3'>
        <UserControls />
      </Grid.Column>
    </>
  );
}
