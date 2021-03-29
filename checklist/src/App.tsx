import React, { useState, useEffect } from "react";

import { Heading, Text, Monospaced, Link, Container, List } from "./components";

import Data from "./assets/data/data.json";

const App = () => {
  const [data, setData] = useState([] as any[]);

  useEffect(() => {
    setData(Object.values(Data));
  }, []);

  return (
    <div className="App">
      <Heading>Hi, Checker!</Heading>
      <Text>This is your checklist. Check the items you already done</Text>

      <Container>
        <List node={data} />
      </Container>
      <Monospaced className="credits">
        This app was developed by{" "}
        <Link href="https://victorodrigues.dev" title="Access my website">
          Victor Rodrigues
        </Link>
      </Monospaced>
    </div>
  );
};

export default App;
