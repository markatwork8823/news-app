import react from "react";
import { Image } from "semantic-ui-react";

interface Props{
    image?: string,
    body: string
}

export default function NewsArticle({image, body}: Props) {
    console.log(image);
  return (
    <>
      <Image src={image} />
      <span>
          {body}
      </span>
    </>
  );
}
