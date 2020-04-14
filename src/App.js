import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Routes from "./containers/index";

function App() {
  return (
    <Main>
      <Navbar />
      <Routes />
    </Main>
  );
}

const Main = styled.div`
  aling-item: center;
`;

export default App;
