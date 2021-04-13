import React from "react";
import { Container } from "semantic-ui-react";
import HeadlinesLatest from "./Features/Headlines/HeadlinesLatest";
import AdBlock from "./Layout/Headers/AdBlock";
import HeaderContainer from "./Layout/Headers/HeaderContainer";
import NavBar from "./Layout/Headers/NavBar";
import Page from "./Layout/Page/Page";

function App() {
  return (
    <>
       {/* <AdBlock />
      <Container>
        <HeaderContainer />
        <NavBar />
        <HeadlinesLatest />
      </Container>  */}
      <Page/>
    </>
  );
}

export default App;
