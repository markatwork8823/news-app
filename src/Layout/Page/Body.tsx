import React from "react";
import { Divider } from "semantic-ui-react";
import Article from "../../Models/Article";
import BodyHeadlines from "./BodyHeadlines";
import MoreNews from "./MoreNews";

interface Props {
    articles: Article[]
  }
export default function Body({articles} : Props) {
  return (
    <>
      <Divider />
      <BodyHeadlines articles={articles} />
      <Divider />
      <MoreNews articles={articles} />
    </>
  );
}
