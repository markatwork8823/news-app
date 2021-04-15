import React from "react";
import { Divider, Grid, Image } from "semantic-ui-react";
import BodyHeadlines from "./BodyHeadlines";
import MoreNews from "./MoreNews";

export default function Body() {
  return (
    <>
      <Divider />
      <BodyHeadlines />
      <Divider />
      <MoreNews />
    </>
  );
}
