import React, { Component } from "react";
import styled from "styled-components";
import HomeComponent from "./Home";

class Home extends Component {
  state = {};
  render() {
    return <HomeComponent />;
  }
}

export default Home;

const Container = styled.div`
  height: 90vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
