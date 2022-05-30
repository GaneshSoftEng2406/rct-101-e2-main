import React from "react";
import { Container } from "@chakra-ui/react";

import Products from "./components/Products";

const App = () => {
  return (
    <div>
      {/* READ: what is container in chakra-ui */}
      <Container maxW="container.xl" textAlign="center">
        <Products />
        {/* Products // show by default*/}
      </Container>
    </div>
  );
};

export default App;