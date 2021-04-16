import react from "react";
import { Image } from "semantic-ui-react";
import Article from "../../Models/Article";

interface Props {
  article: Article;
}

export default function NewsArticle({ article }: Props) {
  return (
    <>
      <Image src={article.image} />
      <div style={{ marginTop: "1rem" }}>
        <span>
          <h3>{article.title}</h3>
        </span>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <span>{article.body.substring(0, 250)}</span>
      </div>
    </>
  );
}
