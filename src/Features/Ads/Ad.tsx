
import { Image } from "semantic-ui-react";

interface Props {
    image?: string;
}
export default function Ad({image} : Props ) {
  return (
    <Image src={image} />
  );
}
