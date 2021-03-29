import React, { useEffect } from "react";

import { Heading, Text, Container, ListItem } from "./components";

import "./styles/global.sass";

const App = () => {
  return (
    <div className="App">
      <Heading>Hi, Checker!</Heading>
      <Text>This is your checklist. Check the items you already done</Text>

      <Container>
        <ListItem></ListItem>
      </Container>
    </div>
  );
};

export default App;
