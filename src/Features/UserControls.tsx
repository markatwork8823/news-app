import React from "react";
import { Button } from "semantic-ui-react";

export default function UserControls() {
  return (
    <>
      <div className="userControls">
        <Button positive>Subscribe</Button>
        <Button>Login</Button>
      </div>
    </>
  );
}
