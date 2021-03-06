import React from "react";
import { Menu } from "semantic-ui-react";

export default function NavBar() {
  return (
    <Menu className="navBar">
      <Menu.Item name="Home" href="some link">
        HOME
      </Menu.Item>
      <Menu.Item>THE NATION</Menu.Item>
      <Menu.Item>WORLD</Menu.Item>
      <Menu.Item>BUSINESS</Menu.Item>
      <Menu.Item>COMMENTARY</Menu.Item>
      <Menu.Item>SPORTS</Menu.Item>
      <Menu.Item>ARTS</Menu.Item>
      <Menu.Item>ALL</Menu.Item>
    </Menu>
  );
}
