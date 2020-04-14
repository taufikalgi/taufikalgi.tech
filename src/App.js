import React from "react";
import Navbar from "./components/Navbar";
import Routes from "./containers/index";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
